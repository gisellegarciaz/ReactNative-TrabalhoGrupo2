import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E7',
        padding: 20,
        paddingBottom: 90

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
    columnWrapper: {
        justifyContent: 'space-around',
        marginBottom: 24,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
    },

    listContent: {
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 6,
    },

    statusBox: {
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    statusBoxReady: {
        backgroundColor: '#E74C3C',
    },
    statusBoxWaiting: {
        backgroundColor: '#F39C12', 
    },
    statusMessageContainer: {
        marginBottom: 4,
    },
    statusMessageText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white', 
    },
    statusMessageBold: {
        fontWeight: '900', 
    },
    statusDateText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },

    subText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 5,
    },
    nextDateText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginTop: 5,
    },


    actionButton: {
        backgroundColor: '#E74C3C',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15,
        elevation: 3,
    },
    actionButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});