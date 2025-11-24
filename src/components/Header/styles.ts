import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        // ESSENCIAL: Coloca os filhos (Olá e Botão) em linha
        flexDirection: 'row',
        
        // ESSENCIAL: Coloca o máximo de espaço entre eles (Olá na esquerda, Botão na direita)
        justifyContent: 'space-between',
        
        // Alinha verticalmente no centro
        alignItems: 'center', 
        
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF', // Fundo branco
        
        // Opcional: Para dar um pequeno destaque visual
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    
    leftContent: {
        // Estilos para o container do 'Olá', se necessário
    },
    
    greetingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#007AFF', // Azul padrão
        borderRadius: 5,
    },
    
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
        // --- Header (Título e Botão Sair) ---
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        padding: 15,
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
});