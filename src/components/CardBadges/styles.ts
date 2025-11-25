import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
    },
    imageWrapper: {
        width: 130,
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Sombra para Android
        backgroundColor: 'transparent',
    },
    popable: {
        flex:1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    image: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    imageLocked: {
        opacity: 0.4, // Deixa transparente para parecer inativo
    },
    label: {
        fontFamily: 'System',
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
    },
    labelLocked: {
        color: '#A0A0A0', // Texto cinza claro
    }
});