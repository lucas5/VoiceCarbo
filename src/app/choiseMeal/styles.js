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
            paddingTop: 20,
            paddingBottom: 20
        },
        textButton: {
            fontWeight: 'bold',
            fontSize: 18,
            color: 'white'
        },
        text: {
            textAlign: 'center', 
            fontSize: 20, 
            color: "grey",
            fontFamily: 'Bellota-Bold'
        },
        textSub: {
            color: colorButton,
            fontStyle: 'italic',
            fontFamily: 'Bellota-Italic'
        },
        cardStyle: {
            borderRadius: 10,
        },
        textRadioButton:  {
            marginLeft: 12, 
            textAlign: 'left', 
            fontSize: 20, 
            color: 'grey',
            fontFamily: 'Bellota Regular'
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