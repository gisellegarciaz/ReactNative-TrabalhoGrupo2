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

    // --- NOVOS ESTILOS PARA O STATUS BOX ---
    statusBox: {
        marginHorizontal: 20,
        padding: 16,
        borderRadius: 12,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // Estilos de sombra para dar profundidade
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    statusBoxReady: {
        backgroundColor: '#E74C3C', // Usando sua cor principal para status pronto (impacto)
    },
    statusBoxWaiting: {
        backgroundColor: '#F39C12', // Usando sua cor de aviso/aguardando
    },
    statusMessageContainer: {
        marginBottom: 4,
    },
    statusMessageText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white', // Cor branca para contraste com os fundos
    },
    statusMessageBold: {
        fontWeight: '900', // Um negrito mais forte para o destaque
        // Cor do texto de destaque muda dependendo do box
        // A cor do texto para ready (Fundo E74C3C) será herdada (White)
    },
    statusDateText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white',
    },
    // --- FIM DOS NOVOS ESTILOS ---

    // Status: APTO (READY) - Removidos para usar o statusBoxReady
    // readyText: { ... },

    // Status: AGUARDANDO (WAIT) - Removidos para usar o statusBoxWaiting
    // waitText: { ... },

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