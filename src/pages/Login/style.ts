
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E74C3C',
        paddingVertical: 50,
    },

    header: {
        marginBottom: 40,
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 18,
        color: '#f0f0f0',
    },

    card: {
        width: '90%',
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },

    input: {
        height: 50,
        backgroundColor: '#f7f7f7',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    loginButton: {
        height: 50,
        backgroundColor: '#C0392B',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    registerButton: {
        marginTop: 20,
    },
    registerButtonText: {
        color: '#E74C3C',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    }
});