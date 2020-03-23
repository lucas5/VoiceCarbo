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
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 50,
            paddingBottom: 20
        },
        textButton: {
            fontSize: 16,
            color: 'white',
            fontFamily: 'Bellota-Bold'
        },
        text: {
            color: 'grey',
            fontSize: 17,
            paddingTop: 20,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'center',
            fontFamily: 'Bellota Regular'
        },
        textSub: {
          color: colorButton,
          fontFamily: 'Bellota-BoldItalic'
        },
        password: {
            color: colorButton,
            fontSize: 17,
            paddingTop: 30,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'right',
            fontFamily: 'Bellota-BoldItalic'
        }
    }
)

export default styles;