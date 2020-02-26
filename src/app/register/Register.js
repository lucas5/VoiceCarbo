import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { UserLogged } from '../../environments/store/store';
import { colorButton } from '../../theme/theme';
import { Button, Divider, TextInput, DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#58ACFA',
        accent: '#f1c40f',
    },
};

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        cpf: '',
        confirm_password: ''
    }

    goRegister = () => {
        const user = new UserLogged(this.state.name, this.state.email, this.state.password, this.state.cpf);
        user.saveUser();
        this.props.navigation.navigate('Login');
    }

    // Verifica os dados fornecidos pelo usuario nos texts input
    // removendo caracteres especiais, deixando apenas letras e numeros.
    getHandler = key => val => {
        val = val.replace(/[^a-z0-9@. ]/gi, '')
        this.setState({ [key]: val.substr(0, 100) });
    }

    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding' >
                    <View>
                        <Text style={styles.text}>Dados pessoais</Text>
                    </View>
                    <Divider />
                    <View style={styles.inputStyle}>
                        <TextInput
                            label='Nome completo'
                            value={this.state.name}
                            onChangeText={this.getHandler('name')}
                            style={{ backgroundColor: 'white' }}
                            theme={theme}
                        />
                        <TextInput
                            label='Cadastro de pessoa física (CPF)'
                            value={this.state.cpf}
                            onChangeText={this.getHandler('cpf')}
                            style={{ backgroundColor: 'white' }}
                            keyboardType='numeric'
                            theme={theme}
                        />
                        <TextInput
                            label='Email'
                            value={this.state.email}
                            onChangeText={this.getHandler('email')}
                            style={{ backgroundColor: 'white' }}
                            theme={theme}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>Senha</Text>
                    </View>
                    <Divider />
                    <View style={styles.inputStyle}>
                        <TextInput
                            label='Senha'
                            value={this.state.password}
                            onChangeText={this.getHandler('password')}
                            style={{ backgroundColor: 'white' }}
                            keyboardType='numeric'
                            secureTextEntry
                            theme={theme}
                        />
                        <TextInput
                            label='Confirmar senha'
                            value={this.state.confirm_password}
                            onChangeText={this.getHandler('confirm_password')}
                            style={{ backgroundColor: 'white' }}
                            keyboardType='numeric'
                            secureTextEntry
                            theme={theme}
                        />
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.buttonStyle}>
                    <Button color={colorButton} mode="outlined" onPress={this.goRegister}>
                        Cadastrar
                    </Button>
                </View>
            </View>
        )
    }
}
