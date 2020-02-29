import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button as Btn } from 'react-native-paper';
import { USER, Store } from '../../environments/store/store';
import styles from './styles';
import { colorButton } from '../../theme/theme';
import { Icon } from 'react-native-elements';
import { Button, Footer, FooterTab } from 'native-base';


export default class Main extends Component {

    state = {
        meals: []
    }

    goRegisterMeal = () => {
        this.props.navigation.navigate('Escolher Refeição');
    }

    render() {
        const st = new Store();
        const ml = st.getMeal();
        //console.log(ml)
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>Olá, seja bem vindo {USER.name}</Text>
                    </View>

                    <View style={styles.buttonStyle}>
                        <Btn color={colorButton} mode="outlined" onPress={this.goRegisterMeal}>
                            Cadastrar refeição
                    </Btn>
                    </View>
                </View>

                <Footer>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Button>
                            <Icon
                                name='home'
                                color='grey'
                                onPress={() => this.props.navigation.navigate('Home', { enfermeiro })}
                            />
                        </Button>
                        <Button>
                            <Icon
                                name='search'
                                color='grey'
                                onPress={() => this.props.navigation.navigate('Busca_paciente', { enfermeiro: enfermeiro })}
                            />
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}
