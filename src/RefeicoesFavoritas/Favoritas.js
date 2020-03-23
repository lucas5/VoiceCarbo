import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { Divider, Button } from 'react-native-paper';
import { API } from '../environments/environments';
import { UserLogged } from '../environments/store/store';
import { colorButton } from '../theme/theme';



export default class Favoritas extends Component {

    state = {
        refeicoes: []
    }

    goFavoritas = async () => {
        const st = new UserLogged().getUser();
        const result = await API.post('favoritas/listar', { email: st.email });
        this.setState({
            refeicoes: result.data.resultado.favoritas
        })
        console.log(result.data.refeicoes.favoritas[0]);
    }

    componentDidUpdate() {
        this.goFavoritas();
    }

    render() {

        this.goFavoritas();
        

        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                {this.state.refeicoes.map((l) => (
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
                            {l.favorita.map((k, i) => (
                                <View key={i} style={{ marginLeft: 20, marginRight: 20 }}>
                                    <View style={{}}>
                                        <Text style={{ color: 'grey', fontSize: 18, fontFamily: 'Bellota-Bold' }}>{k.nome}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'Bellota-BoldItalic' }}>{k.quantidade}x porções</Text>
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
                ))}
            </View>
        )
    }
}
