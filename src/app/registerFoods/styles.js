import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colorBackground,
            justifyContent: 'center',
            paddingLeft: 30,
            paddingRight: 30
        },
        buttonStyle: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 0
        },
        buttonLastStyle: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20
        },
        text: {
            textAlign: 'center',  
            fontSize: 25,
            paddingBottom: 20,
            paddingTop: 10,
            color: colorButton,
            fontFamily: 'Bellota-BoldItalic'
        },
        textFood: {
            color: 'grey',
            fontSize: 22,
            fontFamily: 'Bellota-Bold'
        },
        password: {
            color: colorButton,
            fontWeight: 'bold',
            fontSize: 17,
            paddingTop: 30,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'right',
            fontStyle: 'italic'
        },
        cardStyle: {
            paddingBottom: 50,
            paddingTop: 30,

        },
        card: {
            borderRadius: 10
        },
        dividerStyle: {
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 20
        },
        listStyle: {
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20
        }
    }
)

export default styles;