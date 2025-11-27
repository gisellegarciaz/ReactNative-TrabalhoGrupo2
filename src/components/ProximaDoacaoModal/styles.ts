// Arquivo: ProximaDoacaoModal/styles.ts

import { StyleSheet } from 'react-native';

const PRIMARY_RED = '#CA1741';
const LIGHT_BACKGROUND = '#F9F9F9';
const DARK_OVERLAY = 'rgba(0, 0, 0, 0.7)';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DARK_OVERLAY,
    },
    modalView: {
        margin: 20,
        backgroundColor: LIGHT_BACKGROUND,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',
    },
    modalTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        fontFamily: 'NeulisBold',
    },
    modalSubtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#666',
    },
    primaryButton: {
        backgroundColor: PRIMARY_RED,
        borderRadius: 10,
        padding: 15,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
    },
    closeButtonText: {
        color: PRIMARY_RED,
        fontSize: 16,
        fontWeight: '600',
    },
    resultContainer: {
        marginTop: 40,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEE',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    resultTitle: {
        fontSize: 20,
        color: '#333',
        fontFamily: 'NeulisBold',
        marginBottom: 10,
    },
    resultDate: {
        fontSize: 28,
        color: '#31C9EB',
        fontFamily: 'NeulisBold',
        marginBottom: 10,
    },
    resultMessage: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        fontFamily: 'NeulisRegular',
    },
});