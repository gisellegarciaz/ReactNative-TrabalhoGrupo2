import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingHorizontal: 30,
        paddingTop: 60, 
        paddingBottom: 20,
        backgroundColor: '#F7F7F7',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    leftContent: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 5
    },
    logoImage: {
        width: 60, 
        height: 60,
        marginRight: 10,
        resizeMode: 'contain',
    },
    rightContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    greetingText1: {
        fontSize: 22,
        fontWeight: 'regular',
        color: '#333333',
    },
    greetingText2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#31C9EB',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});