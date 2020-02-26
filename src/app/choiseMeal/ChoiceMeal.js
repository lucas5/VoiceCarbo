import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { } from 'native-base';
import { RadioButton, Button } from 'react-native-paper';
import { Card } from 'react-native-elements';
import styles from './styles';
import { colorButton } from '../../theme/theme';
import { FOOD, Store } from '../../environments/store/store';

export default class ChoiceMeal extends Component {

    state = {
        value: ''
    }

    goRegisterMeal = () => {
        const st = new Store();
        st.saveTypeMeal(this.state.value);
        this.props.navigation.navigate('Cadastrar');
    }

    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.text}>Qual refeição deseja cadastrar?</Text>
                </Card>
                <RadioButton.Group
                    onValueChange={value => this.setState({ value })}
                    value={this.state.value}
                >
                    <View>
                        <View style={styles.radioButton}>
                            <TouchableOpacity onPress={() => this.setState({ value: 'Café da manhã' })}>
                                <View style={styles.viewRadioButton}>
                                    <RadioButton value='Café da manhã' />
                                    <Text style={styles.textRadioButton}>Café da manhã</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ value: 'Almoço' })}>
                                <View style={styles.viewRadioButton}>
                                    <RadioButton value='Almoço' />
                                    <Text style={styles.textRadioButton}>Almoço</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ value: 'Lanche' })}>
                                <View style={styles.viewRadioButton}>
                                    <RadioButton value='Lanche' />
                                    <Text style={styles.textRadioButton}>Lanche</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ value: 'Jantar' })}>
                                <View style={styles.viewRadioButton}>
                                    <RadioButton value='Jantar' />
                                    <Text style={styles.textRadioButton}>Jantar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.setState({ value: 'Refeição extra' })}>
                                <View style={styles.viewRadioButton}>
                                    <RadioButton value='Refeição extra' />
                                    <Text style={styles.textRadioButton}>Refeição extra</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </RadioButton.Group>
                <View style={styles.buttonStyle}>
                    <Button color={colorButton} mode="outlined" onPress={this.goRegisterMeal}>
                        Cadastrar
                    </Button>
                </View>
            </View>
        )
    }
}
