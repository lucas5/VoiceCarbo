import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import { Icon } from 'react-native-elements';
import { colorButton } from '../../theme/theme';
import { UserLogged } from '../../environments/store/store';
import { Button as Btn, Divider, TextInput, DefaultTheme } from 'react-native-paper';
import styles from './styles';
import { servicesUserPerfil } from '../../environments/environments';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#58ACFA',
        accent: '#f1c40f',
    },
};

export default class Perfil extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        medida: '',
        confirm_password: '',
        date: '',
        carregando: false,
        desativado: true,
    }

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

    componentDidMount = () => {
        const user = new UserLogged().getUser();
        this.setState({
            name: user.nome,
            date: user.nascimento,
            medida: user.medida + "",
            email: user.email
        });
    }

    goSalvarPerfil = async () => {
        const user = {
            email: this.state.email,
            insulina: this.state.medida
        }
        const result = await servicesUserPerfil(user);
        if (result.ok) {
            this.setState({
                desativado: !this.state.desativado
            })
            new UserLogged().saveUser({
                email: this.state.email,
                medida: this.state.medida,
                nascimento: this.state.date,
                nome: this.state.name
            });
        }
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

    render() {

        const st = new UserLogged();
        //console.log(st.getUser());

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.inputStyle}>
                    <TextInput
                        label='Nome completo'
                        value={this.state.name}
                        onChangeText={this.getHandler('name')}
                        style={{ backgroundColor: 'white' }}
                        theme={theme}
                        disabled={this.state.desativado}
                    />
                    <TextInput
                        label='Data de nascimento'
                        value={this.state.date}
                        onChangeText={this.getHandler('date')}
                        style={{ backgroundColor: 'white' }}
                        keyboardType='numeric'
                        theme={theme}
                        disabled={this.state.desativado}
                    />
                    <TextInput
                        label='Medida de insulina'
                        value={this.state.medida}
                        onChangeText={this.getHandler('medida')}
                        style={{ backgroundColor: 'white' }}
                        keyboardType='numeric'
                        theme={theme}
                        disabled={this.state.desativado}
                    />
                    <TextInput
                        label='Email'
                        value={this.state.email}
                        onChangeText={this.getHandler('email')}
                        style={{ backgroundColor: 'white' }}
                        theme={theme}
                        disabled={this.state.desativado}
                    />
                    <View style={styles.buttonStyle}>
                        <Btn labelStyle={{ fontFamily: 'Bellota-Bold' }} loading={this.state.carregando} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={() => this.setState({ desativado: !this.state.desativado })}>
                            Editar perfil
                        </Btn>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Btn labelStyle={{ fontFamily: 'Bellota-Bold' }} loading={this.state.carregando} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this.goSalvarPerfil}>
                            Salvar
                        </Btn>
                    </View>
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button onPress={() => this.props.navigation.navigate('Principal')}>
                            <Icon color="grey" name="home" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('Perfil')}>
                            <Icon color={colorButton} name="person" />
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
