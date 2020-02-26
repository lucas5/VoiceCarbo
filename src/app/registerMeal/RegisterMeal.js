import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, PermissionsAndroid, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { Button, Divider, Dialog, Portal, Provider, TextInput } from 'react-native-paper';
import { Right } from 'native-base';
import styles from './styles';
import { colorButton } from '../../theme/theme';
import List_alimentos from './listFoods';
import Voice from 'react-native-voice';
import { Store } from '../../environments/store/store';

const alimentos = List_alimentos;

function Item({ alimento, _showDialog }) {
    return (
        <View>
            <TouchableOpacity onPress={() => _showDialog(alimento)}>
                <View style={{ flexDirection: 'row', paddingBottom: 10, paddingTop: 10, paddingLeft: 20, paddingRight: 20, alignItems: 'center' }}>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>{alimento.nome}</Text>
                        <Text style={{ color: 'grey', fontSize: 14 }}>{alimento.medida_usual} - {alimento.peso} g</Text>
                    </View>
                    <Right style={{ paddingRight: 20 }}>
                        <Text style={styles.textPlus}>+</Text>
                    </Right>
                </View>
            </TouchableOpacity>
            <View style={styles.dividerStyle}>
                <Divider />
            </View>
        </View>
    );
}

export default class RegisterMeal extends Component {

    state = {
        textTitle: 'Fale qual alimento deseja buscar',
        textStatus: '',
        text: '',
        value: '',
        measure: '',

        listening: false,
        visible: false,

        alimentosArr: alimentos,
        selected: null,
    }

    constructor(props) {
        super(props);
        Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
        Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
        Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    }

    componentDidMount() {
        this.requestMicrophonePermission();
    }

    async requestMicrophonePermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //console.log('You can use the microphone');
            } else {
                console.log('Microphone permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    onSpeechResultsHandler(result) {
        this.setState({
            ...this.state,
            text: result.value
        });
    }

    onSpeechStartHandler() {
        this.setState({
            ...this.state,
            textStatus: 'iniciou'
        });
    }

    onSpeechEndHandler() {
        this.setState({
            ...this.state,
            textStatus: 'parou'
        });
    }

    goListening = () => {
        if (!this.state.listening) {
            Voice.start('pt-BR');
            this.setState({
                ...this.state,
                listening: !this.state.listening,
            });
        }
        else {
            Voice.stop();
            this.setState({
                ...this.state,
                listening: !this.state.listening,
            });
        }
    }

    buscaAlimento = (alimento) => {
        var tam = this.state.alimentosArr.length
        var arr_aux = []
        var ali = alimento
        for (var i = 0; i < tam; i++) {
            if (this.state.alimentosArr[i].nome.toUpperCase().includes(ali)) {
                arr_aux = [...arr_aux, this.state.alimentosArr[i]]
            }
        }
        return arr_aux
    }

    goRegisterMeal = () => {
        var alimento = {
            kcal: parseFloat(this.state.selected.kcal) * parseFloat(this.state.value),
            food: this.state.selected,
            measure: this.state.value,
        }
        const st = new Store();
        st.saveFood(alimento);
        this.props.navigation.navigate('Cadastrar', alimento);
    }

    // Verifica os dados fornecidos pelo usuario nos texts input
    // removendo caracteres especiais, deixando apenas letras e numeros.
    getHandler = key => val => {
        val = val.replace(/[^a-z0-9@.]/gi, '')
        this.setState({ [key]: val.substr(0, 100) });
    }

    _showDialog = (selected) => {
        this.setState({
            visible: true,
            textTitle: 'Quantidade de alimento (Unidade)',
            selected
        });
    }

    _hideDialog = () => {
        this.setState({
            visible: false,
            textTitle: 'Fale qual alimento deseja cadastrar',
            measure: this.state.value,
        });
        this.goRegisterMeal()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardStyle}>
                    <Card containerStyle={styles.card}>
                        <Text style={styles.text}>{this.state.textTitle.toUpperCase()}</Text>
                    </Card>
                </View>
                <View>
                    <TouchableOpacity style={styles.imageStyle} onPress={this.goListening}>
                        {!(this.state.listening) && (<Image
                            style={styles.image}
                            source={require('../../assets/mic_blue.png')}
                        />)}

                        {(this.state.listening) && (<Image
                            style={styles.image}
                            source={require('../../assets/mic_green.png')}
                        />)}
                    </TouchableOpacity>
                    <Text style={styles.textResult}>
                        {((this.state.text).toString().toUpperCase()).split(",")[0]}
                    </Text>
                </View>

                {(this.state.text !== '') && (
                    <FlatList
                        data={this.buscaAlimento(((this.state.text).toString().toUpperCase()).split(",")[0])}
                        renderItem={({ item }) => <Item alimento={item} _showDialog={this._showDialog} />}
                        keyExtractor={item => item.id}
                    />)}
                

                <Dialog
                    visible={this.state.visible}
                    onDismiss={() => this.setState({ visible: false })}>
                    <Dialog.Content>
                        <View>
                            <TextInput
                                style={{ backgroundColor: 'white' }}
                                label='Quantidade'
                                keyboardType='numeric'
                                value={this.state.value}
                                onChangeText={value => this.setState({ value })}
                                mode='outlined'
                            />
                            <Text style={{ paddingBottom: 20 }}>Utilize 0.5 para meia porção</Text>
                            <Button color={colorButton} mode="outlined" onPress={this._hideDialog}>
                                Salvar
                                    </Button>
                        </View>
                    </Dialog.Content>
                </Dialog>
            </View >
        )
    }
}