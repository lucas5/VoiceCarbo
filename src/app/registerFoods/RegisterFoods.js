import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { Store, UserLogged } from '../../environments/store/store';
import styles from './styles';
import { Button, Divider } from 'react-native-paper';
import { colorButton } from '../../theme/theme';
import { Card, Icon } from 'react-native-elements';
import { servicesCadastraRefeicao } from '../../environments/environments';

function Item({ alimento, removeFood }) {
    //console.log(alimento);
    return (
        <View>
            <View style={{}}>
                <View style={styles.listStyle}>
                    <Text style={styles.textFood}>{alimento.alimento.nome}</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Bellota-Italic' }}>{alimento.porcao}x porções</Text>
                    <Text style={{ fontSize: 16, fontFamily: 'Bellota-Italic' }}>Total de carboidratos: {alimento.carboidratos} g</Text>
                </View>
                <View style={{ alignItems: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity onPress={() => removeFood(alimento)}>
                        <Text style={{ textAlign: 'right', color: 'red', fontFamily: 'Bellota-Bold' }}>REMOVER</Text>
                        <Icon name="clear" color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={styles.dividerStyle} />
        </View>

    );
}

export default class RegisterFoods extends Component {

    state = {
        foods: [],
        st: new Store()
    }

    goRegisterFood = () => {
        this.props.navigation.navigate('Cadastrar Refeição');
    }

    removeFood = (food) => {
        //console.log(food);
        const st = this.state.st;
        st.removeFood(food);
        this.setState({
            st: this.state.st
        })
    }

    saveMeal = async () => {

        // Pega alimento e o tipo da refeição que está sendo cadastrada
        const ml = this.state.st.getFood();
        const tm = this.state.st.getTypeMeal();
        const us = new UserLogged().getUser();
        // Verifica se o usuario escolheu algum alimento para refeição
        if (ml.length > 0 && tm.length > 0) {
            this.state.st.saveMeal(ml, tm);
            const result = await servicesCadastraRefeicao(this.state.st.getMeal());
            if (result.ok) {
                this.state.st.saveDayMeal(this.state.st.getMeal());
                console.log(this.state.st.getMeal())       
                Alert.alert(
                    'Recomendação',
                    'Unidades de insulina recomendada: ' + parseInt(this.state.st.getMeal().totalDeCarboidratos/us.medida) + ' u',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );

                this.state.st.clearStore();
                this.props.navigation.navigate('Principal', { flag: true });
            }
            else {
                Alert.alert(
                    'Alerta',
                    'Refeição não cadastrada.',
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false },
                );
            }
        }
        else {
            Alert.alert(
                'Alerta',
                'Você deve cadastrar pelo menos um alimento para salvar uma refeição.',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
    }

    render() {
        const st = this.state.st;
        const meal = st.getFood();
        const type_meal = st.getTypeMeal();
        //console.log(meal);
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <FlatList
                        data={meal}
                        renderItem={({ item }) => <Item alimento={item} removeFood={this.removeFood} />}
                        keyExtractor={item => item.alimento.nome}
                        ListHeaderComponent={
                            <Text style={styles.text}>{type_meal}</Text>
                        }
                        ListFooterComponent={
                            <View>
                                <View style={styles.buttonStyle}>
                                    <Button labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this.goRegisterFood}>
                                        + Adicionar alimento
                                    </Button>
                                </View>
                                <View style={styles.buttonLastStyle}>
                                    <Button labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this.saveMeal}>
                                        Salvar refeição
                                    </Button>
                                </View>
                            </View>
                        }
                    />
                </View>
            </View>
        )
    }
}