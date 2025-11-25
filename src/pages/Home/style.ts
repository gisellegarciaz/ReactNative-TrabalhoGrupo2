import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFF8E7',
        // backgroundColor: 'blue',
        paddingTop: 0,
        paddingBottom: 120,
        paddingHorizontal: 20,
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
    gridItem: {
        flex: 1,
        alignItems: 'center',
    },
    listContent: {
        height: 130,
        paddingHorizontal: 15,
        paddingTop: 0,
    },
    badgesText: {
        paddingHorizontal: 20,
        textAlign: 'center',
        marginTop: 22,
        fontSize: 19,
        fontWeight: 'regular',
        color: '#666',
        fontFamily: 'NeulisSemiBold'
    },
    homeText: {
        paddingHorizontal: 20,
        textAlign: 'center',
        marginTop: 22,
        marginBottom: 10,
        fontSize: 19,
        fontWeight: 'regular',
        color: '#666',
        fontFamily: 'NeulisSemiBold'
    },
});