import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { Store } from '../../environments/store/store';
import styles from './styles';
import { Button, Divider } from 'react-native-paper';
import { colorButton } from '../../theme/theme';
import { Card, Icon } from 'react-native-elements';

function Item({ alimento, removeFood }) {
    //console.log(alimento);
    return (
        <View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.listStyle}>
                    <Text style={styles.textFood}>{alimento.food.nome}</Text>
                    <Text>{alimento.measure}x porções</Text>
                    <Text>Total de calorias: {alimento.kcal}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 20 }}>
                    <TouchableOpacity>
                        <Text style={{ textAlign: 'right', color: colorButton }}>ALTERAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => removeFood(alimento)}>
                        <Text style={{ textAlign: 'right', color: 'red' }}>REMOVER</Text>
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
        console.log(food);
        const st = this.state.st;
        st.removeFood(food);
        this.setState({
            st: this.state.st
        })
    }

    saveMeal = () => {
        const ml = this.state.st.getFood();
        const tm = this.state.st.getTypeMeal();
        this.state.st.saveMeal(ml, tm);
        this.state.st.clearStore();
    }

    render() {
        const st = this.state.st;
        const meal = st.getFood();
        const type_meal = st.getTypeMeal();
        console.log(meal);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.cardStyle}>
                        <Card containerStyle={styles.card}>
                            <Text style={styles.text}>{type_meal}</Text>
                            <FlatList
                                data={meal}
                                renderItem={({ item }) => <Item alimento={item} removeFood={this.removeFood} />}
                                keyExtractor={item => item.id}
                            />
                            <View style={styles.buttonStyle}>
                                <Button color={colorButton} mode="outlined" onPress={this.goRegisterFood}>
                                    + Adicionar alimento
                        </Button>
                            </View>
                            <View style={styles.buttonLastStyle}>
                                <Button color={colorButton} mode="outlined" onPress={this.saveMeal}>
                                    Salvar refeição
                            </Button>
                            </View>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        )
    }
}