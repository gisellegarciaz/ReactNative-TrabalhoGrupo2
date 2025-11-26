import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E7',
    },
    contentContainer: {
        padding: 25,
        paddingBottom: 80,
        paddingTop: 40,
        backgroundColor: '#FFF8E7',
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
        marginBottom: 15,
        textAlign: 'center',
    },

    levelBadge: {
        backgroundColor: '#ffffffff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignSelf: 'center',
        marginBottom: 25,
        borderWidth: 1,
        borderColor: '#E8E8E8',
    },

    levelText: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },

    statItem: {
        alignItems: 'center',
        flex: 1,
    },

    infoLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },

    infoValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#CA1741',
        textAlign: 'center',
    },

    section: {
        backgroundColor: '#fffbf2ff',
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
        backgroundColor: '#f1f0edff',
        borderRadius: 8,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#CA1741',
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

    noDonationText: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 10,
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
        color: '#CA1741',
        fontWeight: '500',
    },

    actionsContainer: {
        marginBottom: 20,
    },

    editButton: {
        height: 55,
        backgroundColor: '#31C9EB',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        flexDirection: 'row',
    },

    editButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    donationButton: {
        height: 55,
        backgroundColor: '#CA1741',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    donationButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    achievementCard: {
        backgroundColor: '#FFF3CD',
        borderRadius: 8,
        padding: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#FFC107',
    },

    achievementTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#856404',
        marginBottom: 5,
    },

    achievementText: {
        fontSize: 14,
        color: '#856404',
        lineHeight: 20,
    },

    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
});