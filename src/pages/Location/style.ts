
import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        padding: 20,
    },

    inputContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    searchButton: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#E74C3C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // --- Mapa ---
    map: {
        width: '100%',
        height: height * 0.5, 
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
    },

    statusMessage: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '500',
    },

    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(247, 247, 247, 0.7)',
        zIndex: 10, 
    },

});