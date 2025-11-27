import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E7',
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#FFF8E7',
    },
    
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    headerTitle: {
        fontSize: 24,
        color: '#CA1741',
        marginBottom: 5,
        marginTop: 35,
        textAlign: 'center',
        fontFamily: 'NeulisSemiBold',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 25,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginTop: 15,
        marginBottom: 8,
        fontFamily: 'NeulisBold',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 5,
    },

    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        backgroundColor: '#CA1741',
        borderColor: '#C0392B',
    },
    genderText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
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
        marginBottom: 15,
    },
    datePickerText: {
        fontSize: 16,
        color: '#333',
    },

    bloodTypeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    bloodTypeButton: {
        width: '23%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 8,
    },
    bloodTypeSelected: {
        backgroundColor: '#CA1741',
        borderColor: '#C0392B',
    },
    bloodTypeText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    bloodTypeTextSelected: {
        color: '#fff',
    },

    infoCard: {
        backgroundColor: '#ebd5d2ff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 25,
        marginTop: 25,
        borderLeftWidth: 4,
        borderLeftColor: '#CA1741',
    },
    infoTitle: {
        fontSize: 16,
        color: '#242323ff',
        marginBottom: 8,
        fontFamily: 'NeulisSemiBold',
    },
    infoText: {
        fontSize: 14,
        color: '#4b4b4bff',
        lineHeight: 20,
        fontFamily: 'NeulisRegular',
    },

    saveButton: {
        marginTop: 10,
        height: 55,
        backgroundColor: '#31C9EB',
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
    saveButtonDisabled: {
        backgroundColor: '#CCCCCC',
    },
    saveButtonText: {
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