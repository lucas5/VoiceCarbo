import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Form } from 'native-base';
import { Icon } from 'react-native-elements';
import { Button, TextInput, DefaultTheme, HelperText } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserLogged, Store } from '../../environments/store/store';
import { colorButton } from '../../theme/theme';
import { servicesUserLogin } from '../../environments/environments';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#58ACFA',
        accent: '#f1c40f',
    },
};

export default class Login extends Component {

    state = {
        username: 'admin@admin.com',
        password: 'admin',
        carregando: false,
        errorLogin: ''
    }

    // Efetuar autenticação do usuário
    goLogin = async () => {
        this.setState({ carregando: true });
        const result = await servicesUserLogin(this.state.username, this.state.password);
        if (result.ok) {
            new UserLogged().saveUser(result.data.pessoa);
            this.props.navigation.navigate('Principal');
        }
        else {
            console.log(result.data.error);
            this.setState({
                errorLogin: result.data.error
            })
        }
        this.setState({ carregando: false });
    }

    // Efetuar cadastro do usuário
    goRegister = () => {
        this.props.navigation.navigate('Cadastro')
    }

    // Verifica os dados fornecidos pelo usuario nos texts input
    // removendo caracteres especiais, deixando apenas letras e numeros.
    getHandler = key => val => {
        val = val.replace(/[^a-z0-9@.]/gi, '')
        this.setState({ [key]: val.substr(0, 100) });
    }

    render() {
        return (
            <View style={styles.container}>
                <Form>
                    <View>
                        <TextInput
                            label='Usuário'
                            value={this.state.username}
                            onChangeText={this.getHandler('username')}
                            style={{ backgroundColor: 'white' }}
                            theme={theme}
                        />
                        <HelperText
                            type="error"
                            visible={this.state.errorLogin.length !== 0 && this.state.errorLogin.includes('Email')}
                        >
                            {this.state.errorLogin}!
                        </HelperText>
                    </View>
                    <View>
                        <TextInput
                            label='Senha'
                            value={this.state.password}
                            onChangeText={this.getHandler('password')}
                            style={{ backgroundColor: 'white' }}
                            secureTextEntry
                            theme={theme}
                        />
                        <HelperText
                            type="error"
                            visible={this.state.errorLogin.length !== 0 && this.state.errorLogin.includes('password')}
                        >
                            {this.state.errorLogin}!
                        </HelperText>

                    </View>
                </Form>
                <View style={styles.buttonStyle}>
                    <Button labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent: 'center' }} loading={this.state.carregando} color={colorButton} mode="outlined" onPress={this.goLogin}>
                        Login
                    </Button>
                    <View>
                        <TouchableOpacity onPress={this.goRegister}>
                            <Text style={styles.text}>Não possui cadastro?
                                <Text style={styles.textSub}> Cadastre-se</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
