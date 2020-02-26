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
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white'
        },
        text: {
            color: 'grey',
            fontWeight: 'bold',
            fontSize: 17,
            paddingTop: 20,
            paddingLeft: 5,
            paddingRight: 5,
            textAlign: 'center'
        },
        textSub: {
          color: colorButton,
          fontStyle: 'italic'  
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
        }
    }
)

export default styles;