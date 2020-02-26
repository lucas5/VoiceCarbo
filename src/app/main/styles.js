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
          fontSize: 22,
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: colorButton

        }
    }
)

export default styles;