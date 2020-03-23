import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, PermissionsAndroid, FlatList, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Divider, Dialog, FAB, TextInput } from 'react-native-paper';
import { Right } from 'native-base';
import styles from './styles';
import { colorButton } from '../../theme/theme';
import Voice from 'react-native-voice';
import { Store } from '../../environments/store/store';
import { servicesAlimentos } from '../../environments/environments';


function Item({ alimento, _showDialog }) {
    return (
        <View>
            <TouchableOpacity onPress={() => _showDialog(alimento)}>
                <View style={styles.listContainer}>
                    <View style={{ paddingLeft: 20 }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Bellota-Bold', color: 'grey' }}>{alimento.nome}</Text>
                        <Text style={{ color: 'grey', fontFamily: 'Bellota-Bold', fontSize: 14 }}>{alimento.medida} - {alimento.peso} g</Text>
                    </View>
                    <Right style={{ paddingRight: 20 }}>
                        <Icon name='add' color="#58FA82" />
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

        alimentosArr: [],
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
        this.buscaAlimento(result.value[0])
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

    buscaAlimento = async (alimento) => {
        const ali = alimento.split(",")[0]
        const result = await servicesAlimentos(ali);
        this.setState({
            alimentosArr: result
        });
    }

    goRegisterMeal = () => {
        var alimento = {
            carboidratos: parseFloat(this.state.selected.carboidratos) * parseFloat(this.state.value),
            alimento: this.state.selected,
            porcao: this.state.value,
        }
        new Store().saveFood(alimento);
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
                <FlatList
                    data={this.state.alimentosArr}
                    renderItem={({ item }) => <Item alimento={item} _showDialog={this._showDialog} />}
                    keyExtractor={item => item.nome}
                    ListHeaderComponent={
                        <View>
                            <View style={styles.cardStyle}>
                                <View style={styles.card}>
                                    <Text style={styles.text}>{this.state.textTitle}</Text>
                                </View>

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
                        </View>
                    }
                />
                <Dialog
                    visible={this.state.visible}
                    onDismiss={() => this.setState({ visible: false })}>
                    <Dialog.Content>
                        <View>
                            {(this.state.selected !== null) && (<Text style={{ paddingBottom: 20, fontSize: 18, fontFamily: 'Bellota-Bold' }}>Quantidade de {this.state.selected.nome}:</Text>)}
                            <TextInput
                                style={{ backgroundColor: 'white' }}
                                label='Quantidade'
                                keyboardType='numeric'
                                value={this.state.value}
                                onChangeText={value => this.setState({ value })}
                                mode='outlined'
                            />
                            <Text style={{ fontFamily: 'Bellota-Bold', paddingBottom: 20 }}>Utilize 0.5 para meia porção</Text>
                            <Button labelStyle={{ fontFamily: 'Bellota-Bold' }} style={{ height: 50, justifyContent: 'center' }} color={colorButton} mode="outlined" onPress={this._hideDialog}>
                                Salvar
                                    </Button>
                        </View>
                    </Dialog.Content>
                </Dialog>
                <FAB
                    style={styles.fab}
                    icon="help-circle-outline"
                    onPress={() => this.props.navigation.navigate('Ajuda')}
                    color='white'
                    label='Ajuda'
                />
            </View >
        )
    }
}