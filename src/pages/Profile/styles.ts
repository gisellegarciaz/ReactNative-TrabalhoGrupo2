import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    contentContainer: {
        padding: 20,
    },

    
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 3,
        marginTop: 17,
        textAlign: 'center',
    },
    headerTitleLitle: {
        fontSize: 16,
        color: '#4e4e4eff',
        marginBottom: 8,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },

    infoLabel: {
        fontSize: 20,
        color: '#000000ff',
        marginBottom: 20,
        textAlign: 'center',
    },

    infoValue: {
        fontSize: 26,
        color: '#be1d1dff',
        marginBottom: 20,
        textAlign: 'center',
    },

    section: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
    },

    donationCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F8F9FA',
        borderRadius: 8,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#cc382eff',
    },

    donationInfo: {
        flex: 1,
    },

    donationDate: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },

    hospitalTag: {
        alignSelf: 'flex-start',
        backgroundColor: '#E8F5E8',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },

    hospitalText: {
        fontSize: 12,
        color: '#cc382eff',
        fontWeight: '500',
    },

    saveButton: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#2ECC71',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    donationButton: {
        marginTop: 30,
        height: 55,
        backgroundColor: '#df1212ff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});