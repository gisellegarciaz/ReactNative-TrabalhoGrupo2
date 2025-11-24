import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const PRIMARY_COLOR = '#ffffffff';
export const INACTIVE_COLOR = '#FFF8E7';
export const BACKGROUND_COLOR = '#CA1741';


export const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: BACKGROUND_COLOR,
        height: 90,
        paddingBottom: 19,    
        shadowColor: '#000000e8',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10
    },

    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabText: {
        fontSize: 11.5,
        marginTop: 1,
        marginBottom: 5,
    },
    
    centralButtonWrapper: {
        width: 70, 
        height: 70, 
        marginTop: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centralButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
});