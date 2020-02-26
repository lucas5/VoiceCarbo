import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Form } from 'native-base';
import { Button, TextInput, DefaultTheme } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserLogged } from '../../environments/store/store';
import { colorButton } from '../../theme/theme';

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
        username: '',
        password: ''
    }

    // Efetuar autenticação do usuário
    goLogin = () => {
        this.props.navigation.navigate('Principal');
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
                    <TextInput
                        label='Usuário'
                        value={this.state.username}
                        onChangeText={this.getHandler('username')}
                        style={{ backgroundColor: 'white' }}
                        theme={theme}
                    />
                    <TextInput
                        label='Senha'
                        value={this.state.password}
                        onChangeText={this.getHandler('password')}
                        style={{ backgroundColor: 'white' }}
                        keyboardType='numeric'
                        secureTextEntry
                        theme={theme}
                    />
                </Form>
                <View>
                    <TouchableOpacity onPress={() => console.log('pressed')}>
                        <Text style={styles.password}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonStyle}>
                    <Button color={colorButton} mode="outlined" onPress={this.goLogin}>
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
