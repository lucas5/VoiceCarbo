import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colorBackground,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
            justifyContent: 'center'
        },
        buttonStyle: {
            paddingTop: 10,
            paddingLeft: 40,
            paddingRight: 40,
            justifyContent: 'flex-end',
        },
        textButton: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white'
        },
        text: {
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: colorButton,
        },
        textResult: {
            paddingTop: 25,
            paddingBottom: 25,
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#04B431'
        },
        textPlus: {
            fontSize: 25,
            color: 'green',
            fontWeight: 'normal'
        },
        image: {
            width: 240,
            height: 240,
        },
        imageStyle: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        cardStyle: {
            paddingBottom: 50,
            paddingTop: 20
        },
        card: {
            borderRadius: 10
        },
        dividerStyle: {
            paddingLeft: 25, 
            paddingRight: 25
        }
    }
)

export default styles;