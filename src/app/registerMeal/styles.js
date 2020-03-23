import { StyleSheet } from 'react-native';
import { colorBackground, colorButton } from '../../theme/theme';

styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colorBackground,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 20,
            justifyContent: 'center'
        },
        text: {
            fontSize: 30,
            textAlign: 'center',
            color: colorButton,
            fontFamily: 'Bellota-Bold'
            
        },
        textResult: {
            paddingTop: 25,
            paddingBottom: 25,
            fontSize: 20,
            textAlign: 'center',
            color: '#04B431',
            fontFamily: 'Bellota-Bold'
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
            justifyContent: 'center',
        },
        cardStyle: {
            paddingBottom: 50,
            paddingTop: 50
        },
        card: {
            borderRadius: 10
        },
        dividerStyle: {
            paddingLeft: 25, 
            paddingRight: 25
        },
        listContainer: {
            flexDirection: 'row', 
            paddingBottom: 10, 
            paddingTop: 10, 
            paddingLeft: 10, 
            paddingRight: 10, 
            alignItems: 'center'
        },
        fab: {
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: '#81BEF7',
          },
    }
)

export default styles;