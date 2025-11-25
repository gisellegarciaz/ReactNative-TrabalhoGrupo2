import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#FFF8E7',
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    logo: {
        width: 330,
        height: 120,
        marginBottom: 5,
        marginTop: 40,
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 15,
        color: '#333',
        marginBottom: 8,
        marginLeft: 5,
        marginTop: 10,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#333',
        marginBottom: 10,
    },
    

    dropdown: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 15,
        marginBottom: 10, 
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#333',
    },

    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        marginTop: 5,
    },
    genderButton: {
        flex: 1,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 1,
    },
    genderButtonActive: {
        backgroundColor: '#CA1741',
        borderColor: '#CA1741',
    },
    genderButtonInactive: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    genderButtonText: {
        fontSize: 16,
        fontWeight: '600',
    },
    genderButtonTextActive: {
        color: '#fff',
    },
    genderButtonTextInactive: {
        color: '#3b3b3b',
    },

    TipoGeneroWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        gap: 10
    },
    TipoGeneroContainer: {
        width: '45%',
        gap: 0
    },
    
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#CA1741', 
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },

    loginLinkContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 15,
        color: '#3b3b3b',
    },
    loginButton: {
        fontSize: 15,
        fontWeight: '600',
        color: '#FE5F5F',
        marginLeft: 5,
    },
});