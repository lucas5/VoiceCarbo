import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colorBackground,
            justifyContent: 'center',
            paddingLeft: 20,
            paddingRight: 20
        },
        buttonStyle: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 20,
            paddingBottom: 20
        },
        textButton: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white'
        },
        text: {
            textAlign: 'center', 
            fontWeight: 'bold', 
            fontSize: 20, 
            color: "grey"
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
        },
        cardStyle: {
            borderRadius: 10,
        },
        textRadioButton:  {
            marginLeft: 12, 
            textAlign: 'left', 
            fontSize: 17, 
            color: 'grey'
        },
        viewRadioButton: {
            flexDirection: 'row', 
            alignItems: 'center'
        },
        radioButton: {
            paddingTop: 20,
            paddingBottom: 10, 
            marginLeft: 30, 
            marginRight: 30
        }
    }
)

export default styles;