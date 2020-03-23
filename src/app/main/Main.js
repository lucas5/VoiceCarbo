import React, { Component } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { Button as Btn } from 'react-native-paper';
import { USER, Store } from '../../environments/store/store';
import styles from './styles';
import { colorButton } from '../../theme/theme';
import { Icon } from 'react-native-elements';
import Refeicoes from './Refeicoes';
import { Footer, FooterTab, Button } from 'native-base';
import { API } from '../../environments/environments';

export default class Main extends Component {

    state = {
        meals: [],
        data_atual: "",
        refeicoes: []
    }

    componentDidMount() {
        this.getRefeicoes();
        const date = new Date(Date.now());
        const ano = (date.getFullYear());
        const mes = (date.getMonth()) + 1;
        const dia = (date.getDate());
        this.setState({
            data_atual: dia + "/" + mes + "/" + ano
        })
    }

    goRegisterMeal = () => {
        this.props.navigation.navigate('Escolher Refeição');
    }

    getRefeicoes = async() => {
        const result = await API.post('/historicos/solicitar',{ email: 'admin@admin.com', idata: '2020-03-23'});
        //console.log(result.data.resultado.refeicoes);
        this.setState({
            refeicoes: result.data.resultado.refeicoes
        })
    }

    componentDidUpdate() {
        this.getRefeicoes();
    }

    logout = () => {
        Alert.alert(
            'Atenção',
            'Deseja sair do aplicativo?',
            [
                { text: 'Sim', onPress: () => this.props.navigation.navigate('Login') },
                { text: 'Não', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false },
        );
    }

    verificaRefeicoesDoDia = () => {
        const date = new Date(Date.now());
        const dia = (date.getDate());

    }

    render() {
        const st = new Store();
        st.verificaRefeicaoDiaria();
        const ml = st.getDayMeal();
        //console.log(ml)
        
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.refeicoes}
                        renderItem={({ item }) => <Refeicoes refeicao={item} navigation={this.props.navigation}/>}
                        keyExtractor={item => item.nome}
                        ListHeaderComponent={
                            <View style={{ paddingTop: 50 }}>
                                <View>
                                    <Text style={styles.text}>Olá, seja bem vindo {USER.nome}</Text>
                                </View>
                                <View style={styles.buttonStyle}>
                                    <Btn labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent:'center' }} color={colorButton} mode="outlined" onPress={this.goRegisterMeal}>
                                        Cadastrar refeição
                                    </Btn>
                                    <View style={{ paddingTop: 20 }}></View>
                                </View>

                                <View>
                                    <Text style={styles.text2}>Refeições do dia {this.state.data_atual}</Text>
                                </View>

                                {(ml.length === 0) && (
                                    <View style={{}}>
                                        <Text style={{  fontFamily: 'Bellota-BoldItalic', color: 'grey', fontSize: 18, textAlign: 'center' }}>Nenhuma refeição cadastrada</Text>
                                    </View>
                                )}
                            </View>
                        }
                    />
                </View>

                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button onPress={() => this.props.navigation.navigate('Principal')}>
                            <Icon  color={colorButton} name="home" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Perfil')}>
                            <Icon color="grey" name="person" />
                        </Button>
                        <Button onPress={this.logout}>
                            <Icon color="grey" name="exit-to-app" />
                        </Button>
                    </FooterTab>
                </Footer>
                
            </View>
        )
    }
}
