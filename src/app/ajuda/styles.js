import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: {
            flex: 1, 
            backgroundColor: 'white', 
            alignItems: 'center', 
            justifyContent: 'center', 
            paddingLeft: 40, 
            paddingRight: 40,
            paddingTop: 40
        },
        text: {
            fontFamily: 'Bellota-Bold', 
            textAlign: 'justify', 
            fontSize: 22,
            paddingBottom: 20,
            color: 'grey'
        }
    }
)

export default styles;