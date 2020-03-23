import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            backgroundColor: colorBackground,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center'
        },
        textButton: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white'
        },
        buttonStyle: {
            paddingTop: 50
        },
        text: {
            fontSize: 17,
            fontStyle: 'normal',
            fontWeight: 'bold', 
            paddingBottom: 10,
            color: colorButton
        },
        inputStyle: {
            paddingTop: 20,
            paddingBottom: 30, 
            paddingLeft: 1,
            paddingRight: 1,
            flex: 1,
            paddingRight: 30, 
            paddingLeft: 30,
            justifyContent: 'center'
        }
    }
)

export default styles;