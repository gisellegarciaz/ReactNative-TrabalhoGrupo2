import { StyleSheet, ViewStyle, TextStyle } from 'react-native';


const WHITE = '#fff';
const LIGHT_CREAM = '#FFF8E7';
const RED_PRIMARY = '#dc2626';
const GRAY_TEXT = '#333';
const GRAY_DISABLED = '#A9A9A9';
const FONT_FAMILY = 'NeulisSemiBold';

interface Style {
    safeArea: ViewStyle;
    scrollContent: ViewStyle;
    container: ViewStyle;
    title: TextStyle;
    subtitle: TextStyle;
    listContainer: ViewStyle;
    button: ViewStyle;
    buttonDisabled: ViewStyle;
    buttonText: TextStyle;
}

interface ItemStyle {
    itemContainer: ViewStyle;
    checkbox: ViewStyle;
    checked: ViewStyle;
    checkText: TextStyle;
    itemText: TextStyle;
    itemCompleted: TextStyle;
}

export const styles = StyleSheet.create<Style>({
    safeArea: {
        flex: 1,
        backgroundColor: LIGHT_CREAM,
    },
    scrollContent: {
        flexGrow: 1,
    },
    container: {
        padding: 20,
        backgroundColor: LIGHT_CREAM,
    },
    title: {
        fontSize: 30,
        color: RED_PRIMARY,
        marginBottom: 10,
        fontFamily: FONT_FAMILY,
    },
    subtitle: {
        fontSize: 16,
        color: GRAY_TEXT,
        marginBottom: 20,
        fontFamily: FONT_FAMILY,
    },
    listContainer: {
        backgroundColor: WHITE,
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    button: {
        backgroundColor: RED_PRIMARY,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonDisabled: {
        backgroundColor: GRAY_DISABLED,
    },
    buttonText: {
        color: WHITE,
        fontSize: 18,
        fontWeight: '700',
        fontFamily: FONT_FAMILY,
    },
});

export const itemStyles = StyleSheet.create<ItemStyle>({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: RED_PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    checked: {
        backgroundColor: RED_PRIMARY,
        borderColor: RED_PRIMARY,
    },
    checkText: {
        color: WHITE,
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: FONT_FAMILY,
    },
    itemText: {
        fontSize: 16,
        color: GRAY_TEXT,
        flex: 1,
        fontFamily: FONT_FAMILY,
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
        color: GRAY_DISABLED,
        fontFamily: FONT_FAMILY,
    }
});