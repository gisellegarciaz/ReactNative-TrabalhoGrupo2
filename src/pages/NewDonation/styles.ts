import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF8E7',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 120,
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
        color: '#CA1741',
        marginBottom: 5,
        marginTop: 50,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },

    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 15,
        marginBottom: 8,
        fontWeight: 'bold',
    },

    input: {
        minHeight: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        textAlignVertical: 'top',
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

    infoCard: {
        backgroundColor: '#fde5ebff',
        borderRadius: 8,
        padding: 15,
        marginTop: 10,
        marginBottom: 20,
        borderLeftWidth: 4,
        borderLeftColor: '#CA1741',
    },

    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    infoText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },

    highlight: {
        color: '#CA1741',
        fontWeight: 'bold',
    },

    registerButton: {
        marginTop: 20,
        height: 55,
        backgroundColor: '#CA1741',
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

    cancelButton: {
        marginTop: 15,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },

    cancelButtonText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '500',
    },
});