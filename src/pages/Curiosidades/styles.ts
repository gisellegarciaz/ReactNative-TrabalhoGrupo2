import { StyleSheet } from 'react-native';

const WHITE = '#fff';
const LIGHT_CREAM = '#FFF8E7'; 
const RED_PRIMARY = '#dc2626'; 
const FONT_FAMILY = 'NeulisSemiBold';
const GRAY_TEXT = '#333';

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: LIGHT_CREAM, 
    },
    header: {
        backgroundColor: RED_PRIMARY, 
        paddingVertical: 20,
        paddingHorizontal: 20,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: WHITE,
        textAlign: 'center',
        marginBottom: 4,
        fontFamily: FONT_FAMILY, 
    },
    headerSubtitle: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        fontFamily: FONT_FAMILY, 
    },
    listContainer: {
        paddingHorizontal: 15,
        paddingTop: 15,
    },
    cardContainer: {
        backgroundColor: WHITE, 
        borderRadius: 12,
        marginVertical: 8,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderLeftWidth: 5,
        borderLeftColor: RED_PRIMARY, 
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: WHITE,
    },
    cardIcon: {
        fontSize: 28,
        marginRight: 10,
        color: RED_PRIMARY, 
    },
    cardTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '600',
        color: GRAY_TEXT, 
        fontFamily: FONT_FAMILY, 
    },
    expandIndicator: {
        fontSize: 18,
        color: RED_PRIMARY, 
        fontWeight: 'bold',
        fontFamily: FONT_FAMILY, 
    },
    cardContent: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        paddingTop: 5,
        backgroundColor: '#FAFAFA', 
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
    },
    cardDescription: {
        fontSize: 16,
        color: GRAY_TEXT, 
        lineHeight: 24,
        fontFamily: FONT_FAMILY, 
    },
});