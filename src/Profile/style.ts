import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    contentContainer: {
        padding: 20,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 15,
        marginBottom: 5,
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
    },

    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10,
    },
    genderButton: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginHorizontal: 5,
    },
    genderSelected: {
        backgroundColor: '#E74C3C',
        borderColor: '#C0392B',
    },
    genderText: {
        fontSize: 16,
        color: '#333',
    },
    textSelected: {
        color: '#fff',
        fontWeight: 'bold',
    },

    datePickerButton: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    datePickerText: {
        fontSize: 16,
        color: '#333',
    },

    saveButton: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#2ECC71',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});