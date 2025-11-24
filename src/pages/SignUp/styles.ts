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
        marginTop: 40
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
    dropdown: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        paddingHorizontal: 15,
    },
    placeholderStyle: {
        fontSize: 16,
        color: '#999',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#333',
    },
    button: {
        width: '100%',
        height: 55,
        backgroundColor: '#31C9EB',
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
});