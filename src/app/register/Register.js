import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, Alert, ScrollView } from 'react-native';
import styles from './styles';
import { UserLogged } from '../../environments/store/store';
import { colorButton } from '../../theme/theme';
import { Button, Divider, TextInput, DefaultTheme } from 'react-native-paper';
import { servicesUserCadastro } from '../../environments/environments';

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
        medida: '',
        confirm_password: '',
        date: '',
        carregando: false
    }

    goRegister = async () => {
        this.setState({ carregando: true });
        const result = await servicesUserCadastro(this.state.name, this.state.email, this.state.password, this.state.date, this.state.medida);
        if (result.ok) {
            this.props.navigation.navigate('Login');
        }
        else {
            Alert.alert(
                'Alerta',
                'Usuário não cadastrado.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
        this.setState({ carregando: false });
    }

    // Verifica os dados fornecidos pelo usuario nos texts input
    // removendo caracteres especiais, deixando apenas letras e numeros.
    getHandler = key => val => {
        if (key === 'date' && val.length === 8) {
            val = val.replace(/[^0-9@. ]/gi, '')
            val = val[0] + val[1] + '/' + val[2] + val[3] + '/' + val[4] + val[5] + val[6] + val[7];
            this.setState({
                [key]: val
            })
        }
        else {
            val = val.replace(/[^a-z0-9@. ]/gi, '')
            this.setState({ [key]: val.substr(0, 100) });

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView behavior='padding' >
                    <View style={{ paddingTop: 50 }}>
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
                            label='Data de nascimento'
                            value={this.state.date}
                            onChangeText={this.getHandler('date')}
                            style={{ backgroundColor: 'white' }}
                            keyboardType='numeric'
                            theme={theme}
                        />
                        <TextInput
                            label='Medida de insulina'
                            value={this.state.medida}
                            onChangeText={this.getHandler('medida')}
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
                    <View style={styles.buttonStyle}>
                        <Button labelStyle={{ fontFamily: 'Bellota-Bold' }} loading={this.state.carregando} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this.goRegister}>
                            Cadastrar
                    </Button>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
