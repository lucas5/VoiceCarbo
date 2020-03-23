// Arquivo que faz a conecta a aplicação à API
import { create } from 'apisauce';
import { UserLogged, USER, Store } from './store/store';

const API = create({
    baseURL: 'https://apivc.herokuapp.com',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    timeout: 15000
});

async function servicesAlimentos(alimento) {
    let ali = alimento.split(' ');
    let arr = [];
    for (var i = 0; i < ali.length; i++) {
        arr = [...arr, { nome: ali[i] }];
    }
    const foods = {
        nomes: arr
    }
    const result = await API.post('/alimentos', foods);
    return result.data.alimentos;
}

async function servicesCadastraRefeicao(refeicao) {

    const st = new Store();
    // Pega usuário logado no app
    const user = USER;
    // Pega data atual
    const date = new Date(Date.now());
    const ano = (date.getFullYear());
    var mes = (date.getMonth()) + 1;
    mes = (mes <= 9) ? '0'+mes : mes;
    var dia = (date.getDate());
    dia = (dia <= 9) ? '0'+dia : dia;


    const data_atual = ano + "-" + mes + "-" + dia;

    // Pega o tipo da refeição
    const tipo = st.getTypeMeal();
    const alimentos = st.getMeal();
    var alimentos_aux = [];   
    
    
    for (var i = 0; i < alimentos.meal.length; i++) {
        alimentos_aux = [...alimentos_aux, { nome: alimentos.meal[i].alimento.nome, quantidade: alimentos.meal[i].porcao }]
    }
    
    const ref = {
        idata: data_atual,
        email: user.email,
        tipo,
        pratos: alimentos_aux
    }
    //console.log(ref);
    const result = await API.post('/refeicao/registrar', ref);
    //console.log(result);
    return result;
}

async function servicesUserCadastro(nome, email, senha, nascimento, medida) {
    let user = {
        nome,
        email,
        senha,
        nascimento,
        medida
    }
    const result = await API.post('/pessoas/cadastrar', user);
    return result;
}

async function servicesUserPerfil(user) {
    const result = await API.put('/pessoas/atualizarInsulina', user)
    return result;
}

async function servicesUserLogin(email, senha) {
    let user = {
        email,
        senha
    }
    const result = await API.post('/pessoas/login', user);
    return result;
}


export { 
    API, 
    servicesAlimentos, 
    servicesUserCadastro, 
    servicesUserLogin, 
    servicesCadastraRefeicao,
    servicesUserPerfil 
}