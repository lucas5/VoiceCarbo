import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            backgroundColor: colorBackground,
            justifyContent: 'center',
        },
        buttonStyle: {
            paddingLeft: 30,
            paddingRight: 30,
            paddingTop: 50,
            paddingBottom: 20,
            justifyContent: 'center'
        },
        textButton: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'white'
        },
        text: {
          fontSize: 22,
          textAlign: 'center',
          color: colorButton,
          fontFamily: 'Bellota-Bold',
          paddingLeft: 10,
          paddingRight: 10
          
        },
        text2: {
          fontSize: 22,
          paddingTop: 30,
          textAlign: 'center',
          color: colorButton,
          paddingBottom: 20,
          fontFamily: 'Bellota-Bold'
        }
    }
)

export default styles;