import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { colorButton } from '../../theme/theme';
import { Divider, Button } from 'react-native-paper';
import { UserLogged } from '../../environments/store/store';
import { API } from '../../environments/environments';

export default class Refeicoes extends Component {

    state = {
        pressed: false,
        data_atual: ""
    }

    favoritarRefeicao = async(refeicao) => {
        const st = new UserLogged().getUser();
        const ref = {
            email: st.email,
            id_refeicao: this.props.refeicao.refeicao.id_refeicao
        }
        console.log(ref)
        const result = await API.post('favoritas/inserir', ref);
        if (result.ok) {
            Alert.alert(
                'Alerta',
                'Refeição favoritada com sucesso',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }
        console.log(result);
    }

    render() {
        const refeicao = this.props.refeicao;
        const st = new UserLogged().getUser();
        //console.log(refeicao)
        return (
            <View>
                <TouchableOpacity onPress={() => { this.setState({ pressed: !this.state.pressed }) }}>
                    <Card containerStyle={{ backgroundColor: colorButton, borderRadius: 30 }}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Bellota-Bold' }}>
                                <Text style={{}}>{refeicao.refeicao.tipo}</Text>
                            </Text>
                            <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Bellota Regular' }}>Carboidratos:
                                <Text style={{}}> {refeicao.refeicao.total_carboidratos} g</Text>
                            </Text>
                            <Text style={{ color: 'white', fontSize: 17, fontFamily: 'Bellota Regular' }}>Insulina recomendada:
                                <Text style={{}}> {(refeicao.refeicao.insulina)} u</Text>
                            </Text>
                            <Icon name="keyboard-arrow-down" color='white' />
                        </View>
                    </Card>
                    {(this.state.pressed) && (
                        <View style={{ paddingTop: 15, borderBottomEndRadius: 10, borderBottomLeftRadius: 10, borderTopWidth: 0, borderColor: colorButton, borderWidth: 1, marginLeft: 35, marginRight: 35 }}>
                            {refeicao.pratos.prato.map((l, i) => (
                                <View key={i} style={{ marginLeft: 20, marginRight: 20 }}>
                                    <View style={{}}>
                                        <Text style={{ color: 'grey', fontSize: 18, fontFamily: 'Bellota-Bold' }}>{l.nome}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'Bellota-BoldItalic' }}>{l.quantidade}x porções</Text>
                                    </View>
                                    <Divider style={{
                                        marginTop: 20,
                                        marginBottom: 20,
                                        marginLeft: 20,
                                        marginRight: 20
                                    }} />
                                </View>
                            ))}
                            <View style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20}}>
                                <Button icon="star-outline" labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this.favoritarRefeicao}>
                                    Favoritar refeição
                                </Button>
                            </View>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
        )
    }
}
