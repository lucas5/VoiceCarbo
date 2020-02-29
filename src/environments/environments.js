// Arquivo que faz a conecta a aplicação à API
import { create } from 'apisauce';
const axios = require('axios');

const AX = axios.create({
    baseURL: 'https://apivc.herokuapp.com'
})

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
    //console.log(result.data.alimentos)
    return result.data.alimentos;
}


export { API, servicesAlimentos, AX }