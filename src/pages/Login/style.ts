import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF8E7',
        paddingVertical: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 290,
        height: 160,
        marginBottom: 20,
    },
    card: {
        width: '85%',
        maxWidth: 400,
        borderRadius: 15,
        paddingHorizontal: 25,
        shadowColor: '#212121ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 8,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: '#3b3b3b',
        marginBottom: 20,
        textAlign: 'center',
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '300',
        color: '#3b3b3b',
        paddingVertical: 5,
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
        backgroundColor: '#CA1741',
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
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 20,
    },
    registerText: {
        color: '#3b3b3b',
        fontSize: 15,
        fontWeight: '500',         
    },
    registerButtonText: {
        color: '#FE5F5F',
        fontSize: 15,
        fontWeight: '600',
    }
});