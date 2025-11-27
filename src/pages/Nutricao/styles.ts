import { StyleSheet, Dimensions, TextStyle, ViewStyle } from 'react-native';

const { width } = Dimensions.get('window');

const WHITE = '#fff';
const LIGHT_CREAM = '#FFF8E7';
const RED_PRIMARY = '#dc2626';
const GRAY_TEXT = '#333';
const FONT_FAMILY = 'NeulisSemiBold';
const FONT_FORTE = 'NeulisBold';


const WARNING_BACKGROUND = '#FFFBEB';
const WARNING_BORDER = '#F59E0B';
const WARNING_TEXT_COLOR = '#B45309';

const ALERT_BACKGROUND = '#FEF2F2';
const ALERT_BORDER = '#EF4444';
const ALERT_TEXT_COLOR = '#991B1B';

interface Style {
    safeArea: ViewStyle;
    contentContainer: ViewStyle;
    mainContent: ViewStyle;
    header: ViewStyle;
    h1: TextStyle;
    subtitle: TextStyle;
    section: ViewStyle;
    h2: TextStyle;
    sectionText: TextStyle;
    cardsRow: ViewStyle;
    cardContainer: ViewStyle;
    cardHeader: ViewStyle;
    cardIcon: TextStyle;
    cardTitle: TextStyle;
    cardContent: ViewStyle;
    listText: TextStyle;
    listItem: ViewStyle;
    listBullet: TextStyle;
    boldText: TextStyle;
    warningBox: ViewStyle;
    warningHeader: ViewStyle;
    warningIcon: TextStyle;
    warningTitle: TextStyle;
    warningBullet: TextStyle;
    warningText: TextStyle;
    alertBox: ViewStyle;
    alertHeader: ViewStyle;
    alertIcon: TextStyle;
    alertTitle: TextStyle;
    alertText: TextStyle;
    footer: ViewStyle;
    footerText: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    safeArea: {
        flex: 1,
        backgroundColor: LIGHT_CREAM,
    },
    contentContainer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
        minHeight: '100%',
    },
    mainContent: {
        maxWidth: 800,
        width: '100%',
        alignSelf: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
    },
    h1: {
        fontSize: width > 600 ? 40 : 30,
        color: RED_PRIMARY,
        textAlign: 'center',
        marginBottom: 5,
        fontFamily: FONT_FORTE,
    },
    subtitle: {
        fontSize: 16,
        color: RED_PRIMARY,
        textAlign: 'center',
        paddingHorizontal: 10,
        fontFamily: FONT_FAMILY,
    },
    section: {
        marginBottom: 30,
        width: '100%',
    },
    h2: {
        fontSize: width > 600 ? 28 : 22,
        color: GRAY_TEXT,
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomWidth: 3,
        borderBottomColor: RED_PRIMARY,
        fontFamily: FONT_FORTE,
    },
    sectionText: {
        color: GRAY_TEXT,
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: FONT_FAMILY,
    },
    cardsRow: {
        flexDirection: width > 600 ? 'row' : 'column',
        justifyContent: 'space-between',
        marginLeft: width > 600 ? -10 : 0,
        marginRight: width > 600 ? -10 : 0,
    },
    cardContainer: {
        backgroundColor: WHITE,
        borderRadius: 12,
        padding: 20,
        flex: width > 600 ? 1 : 0,
        marginHorizontal: width > 600 ? 10 : 0,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 1,
        borderColor: RED_PRIMARY,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    cardIcon: {
        fontSize: 28,
        marginRight: 10,
        color: RED_PRIMARY,
    },
    cardTitle: {
        fontSize: 18,
        color: RED_PRIMARY,
        fontFamily: FONT_FAMILY,
    },
    cardContent: {
        flexGrow: 1,
    },
    listText: {
        fontSize: 14,
        color: GRAY_TEXT,
        lineHeight: 20,
        marginBottom: 5,
        flexShrink: 1,
        fontFamily: FONT_FAMILY,
    },
    listItem: {
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 2,
        alignItems: 'flex-start',
    },
    listBullet: {
        marginRight: 5,
        fontSize: 14,
        color: GRAY_TEXT,
        fontFamily: FONT_FAMILY,
    },
    boldText: {
        fontFamily: FONT_FAMILY,
    },

    warningBox: {
        backgroundColor: WARNING_BACKGROUND,
        borderLeftWidth: 4,
        borderLeftColor: WARNING_BORDER,
        borderRadius: 8,
        padding: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    warningHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    warningIcon: {
        fontSize: 20,
        marginRight: 8,
        color: WARNING_BORDER,
    },
    warningTitle: {
        fontSize: 16,
        color: WARNING_TEXT_COLOR,
        fontFamily: FONT_FAMILY,
    },
    warningBullet: {
        marginRight: 5,
        fontSize: 14,
        color: WARNING_TEXT_COLOR,
        fontFamily: FONT_FAMILY,
    },
    warningText: {
        fontSize: 14,
        color: WARNING_TEXT_COLOR,
        lineHeight: 20,
        flexShrink: 1,
        fontFamily: FONT_FAMILY,
    },

    alertBox: {
        backgroundColor: ALERT_BACKGROUND,
        borderLeftWidth: 4,
        borderLeftColor: ALERT_BORDER,
        borderRadius: 8,
        padding: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    alertHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    alertIcon: {
        fontSize: 20,
        marginRight: 8,
        color: ALERT_BORDER,
    },
    alertTitle: {
        fontSize: 16,
        color: ALERT_TEXT_COLOR,
        fontFamily: FONT_FAMILY,
    },
    alertText: {
        fontSize: 13,
        color: ALERT_TEXT_COLOR,
        lineHeight: 18,
        fontFamily: FONT_FORTE,
    },

    footer: {
        marginTop: 30,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        width: '100%',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 11,
        color: '#6B7280',
        textAlign: 'center',
        fontFamily: FONT_FAMILY,
    },
});
