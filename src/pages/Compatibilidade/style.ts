import { StyleSheet } from 'react-native';

const WHITE = '#fff';
const LIGHT_CREAM = '#FFF8E7';
const RED_PRIMARY = '#dc2626';
const RED_SECONDARY = '#b91c1c';
const GRAY_TEXT = '#333';
const FONT_FAMILY = 'NeulisSemiBold';


export const COLORS = {

    red500: '#ef4444',
    red700: '#b91c1c',
    blue500: '#3b82f6',
    blue700: '#1e40af',
    green500: '#22c55e',
    green700: '#15803d',
    yellow500: '#eab308',
    yellow700: '#a16207',
};

export const styles = StyleSheet.create({

    container: {
        paddingVertical: 60,
        paddingHorizontal: 18,
        alignItems: 'center',
        backgroundColor: LIGHT_CREAM,
    },


    title: {
        fontSize: 32,
        textAlign: 'center',
        color: RED_PRIMARY,
        marginBottom: 10,
        fontFamily: FONT_FAMILY,
    },

    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        color: GRAY_TEXT,
        marginBottom: 20,
        fontFamily: FONT_FAMILY,
    },

    bloodButtonText: {
        fontSize: 22,
        color: GRAY_TEXT,
        fontFamily: FONT_FAMILY,
    },

    cardTitle: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 15,
        color: RED_SECONDARY,
        fontFamily: FONT_FAMILY,
    },

    statsText: {
        fontSize: 16,
        color: GRAY_TEXT,
        fontFamily: FONT_FAMILY,
    },

    statsNumber: {
        fontSize: 40,
        color: RED_PRIMARY,
        fontFamily: FONT_FAMILY,
    },

    description: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginVertical: 15,
        color: GRAY_TEXT,
        fontFamily: FONT_FAMILY,
    },

    boxTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: FONT_FAMILY,
    },

    pillText: {
        fontSize: 16,
        fontFamily: FONT_FAMILY,
    },

    waitText: {
        fontSize: 20,
        textAlign: 'center',
        color: GRAY_TEXT,
        fontFamily: FONT_FAMILY,
    },

    nextButtonText: {
        fontSize: 20,
        color: WHITE,
        textTransform: 'uppercase',
        fontFamily: FONT_FAMILY,
    },


    buttonsBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 10,
    },

    bloodButton: {
        padding: 15,
        borderRadius: 12,
        backgroundColor: WHITE,
        borderWidth: 3,
        borderColor: RED_SECONDARY,
        margin: 5,
    },

    card: {
        marginTop: 25,
        backgroundColor: WHITE,
        padding: 20,
        borderRadius: 16,
        width: '100%',
        elevation: 5,
    },

    statsBox: {
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },

    boxDonate: {
        backgroundColor: '#d1fae5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
    },

    boxReceive: {
        backgroundColor: '#dbeafe',
        padding: 12,
        borderRadius: 10,
    },

    compatibilityContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    pill: {
        backgroundColor: '#eee',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 20,
        margin: 4,
    },

    waitBox: {
        padding: 30,
        marginTop: 20,
        backgroundColor: WHITE,
        borderRadius: 12,
        elevation: 5,
    },

    nextButton: {
        marginTop: 30,
        padding: 15,
        backgroundColor: RED_PRIMARY,
        borderRadius: 12,
        width: '100%',
        alignItems: 'center',
    },
});