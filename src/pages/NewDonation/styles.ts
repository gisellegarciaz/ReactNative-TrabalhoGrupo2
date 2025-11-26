import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        marginTop:50,
        textAlign: 'center',
    },

    greeting: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: '500',
    },

    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 15,
        marginBottom: 8,
        fontWeight: 'bold',
    },

    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },

    datePickerButton: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },

    datePickerText: {
        fontSize: 16,
        color: '#333',
    },

    registerButton: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#E74C3C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },

    registerButtonDisabled: {
        backgroundColor: '#CCCCCC',
    },

    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});