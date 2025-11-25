import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '43%',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fb5d5a',
        borderRadius: 12,
        paddingTop: 3,
        padding: 7,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4, // Sombra no Android
    },

    imageWrapper: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 8,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    text: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#F7F7F7',
        textAlign: 'center',
    }
});