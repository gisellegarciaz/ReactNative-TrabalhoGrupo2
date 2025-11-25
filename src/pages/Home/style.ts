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
        justifyContent: 'space-around', // Distribui o espaço entre as colunas
        marginBottom: 24, // Espaço vertical entre as LINHAS de badges
    },
    gridItem: {
        flex: 1, // Cada item ocupa 50% da largura (pois são 2 colunas)
        alignItems: 'center', // Centraliza a Badge horizontalmente
    },

    listContent: {
        paddingHorizontal: 15,
        paddingTop: 20,
        gap: 6,
    },

    // Status: APTO (READY)
    readyText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2ECC71', // Verde
        textAlign: 'center',
        marginBottom: 10,
    },

    // Status: AGUARDANDO (WAIT)
    waitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#F39C12', // Amarelo/Laranja
        textAlign: 'center',
        marginBottom: 10,
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

    // --- Botões de Ação (Location, Profile) ---
    actionButton: {
        backgroundColor: '#E74C3C', // Cor principal de doação
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