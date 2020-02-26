import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from 'react-native-elements';
import { USER, Store } from '../../environments/store/store';
import styles from './styles';
import { colorButton } from '../../theme/theme';

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
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>Olá, seja bem vindo {USER.name}</Text>
                </View>

                <View style={{}}>
                    {ml.map((l) => {
                        <View>
                            <Text>{l.meal.kcal}</Text>
                        </View>
                    })}
                </View>

                <View style={styles.buttonStyle}>
                    <Button color={colorButton} mode="outlined" onPress={this.goRegisterMeal}>
                        Cadastrar refeição
                    </Button>
                </View>
            </View>
        )
    }
}
