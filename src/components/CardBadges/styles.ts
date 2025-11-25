import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120, // Em RN não usamos 'px', é numérico
        padding: 8,
    },
    imageWrapper: {
        width: 120,
        height: 120,
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
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    // Estilo específico para quando estiver bloqueado
    imageLocked: {
        opacity: 0.4, // Deixa transparente para parecer inativo
        // Nota: O React Native padrão não tem grayscale real.
        // Se quiser cinza absoluto, precisaria de uma lib externa ou tintColor (que remove as cores).
        // tintColor: '#d1d1d1', // Descomente se preferir uma silhueta cinza
    },
    label: {
        fontFamily: 'System', // Ou a fonte do seu app (ex: 'Roboto-Bold')
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center',
    },
    labelLocked: {
        color: '#A0A0A0', // Texto cinza claro
    }
});