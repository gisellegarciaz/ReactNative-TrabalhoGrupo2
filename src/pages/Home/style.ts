import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
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
    
    // --- Header (Título e Botão Sair) ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E74C3C',
    },
    logoutButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: '#CCC',
        borderRadius: 5,
    },
    logoutButtonText: {
        color: '#444',
        fontWeight: 'bold',
    },

    // --- Card de Status de Doação ---
    statusCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statusTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    statusMessage: {
        fontSize: 16,
        color: '#A93226',
        textAlign: 'center',
        lineHeight: 24,
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