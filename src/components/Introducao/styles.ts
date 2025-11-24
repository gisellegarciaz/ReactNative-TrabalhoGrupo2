import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: '90%',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFF9E9', 
        justifyContent: 'space-around',
    },
    skipButton: {
        position: 'absolute',
        top: 5,
        left: 110,
        zIndex: 10,
        padding: 5,
    },
    skipText: {
        color: '#999',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: '90%',
        height: '45%',
        marginVertical: 2,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        padding: 5,
        lineHeight: 40,
        color: '#333',
    },
    description: {
        fontSize: 22,
        textAlign: 'center',
        marginHorizontal: 25,
        marginBottom: 0,
        color: '#666',
    },
    button: {
        backgroundColor: '#31C9EB', 
        padding: 15,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    initialButton: {
        backgroundColor: '#CA1741', 
    },
    buttonText: {
        color: '#FFF9E9',
        fontSize: 20,
        fontWeight: 'bold',
    },
    swipeContainer: {
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    swipeText: {
        fontSize: 18,
        color: '#999',
        fontStyle: 'italic',
    }
});

export const appStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#FFF9E9', 
    },
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        backgroundColor: '#FFF9E9',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
    dotActive: {
        backgroundColor: '#CA1741',
    },
    dotInactive: {
        backgroundColor: '#ccc',
    },
});