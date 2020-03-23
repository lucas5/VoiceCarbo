import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'

export default class Ajuda extends Component {
    render() {
        return (

            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.text}>1. Aperte o botão azul do microfone.</Text>
                    <Text style={styles.text}>
                        2. Após o botão do microfone ficar verde,
                        fale o alimento de deseja buscar e aperte
                        novamente o botão do microfone.
                    </Text>
                    <Text style={styles.text}>3. Aguarde enquanto seu alimento é buscado no sistema.</Text>
                    <Text style={styles.text}>4. Após seu alimento ser encontrado no sistema, uma lista de
                        alimentos irá aparecer, escolha o alimento que foi consumido clicando nele.
                </Text>
                    <Text style={styles.text}>5. Após clicar no alimento consumido, escolha a quantidade
                        que foi ingerida e aperte em "Salvar".
                </Text>
                    <Text style={styles.text}>6. Pronto seu alimento foi salvo.
                </Text>
                </ScrollView>
            </View>
        )
    }
}