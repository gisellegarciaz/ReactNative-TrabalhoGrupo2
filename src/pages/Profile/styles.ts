import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F7F7F7',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
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

    profileHeader: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },

    greeting: {
        fontSize: 18,
        color: '#666',
        marginBottom: 8,
        fontWeight: '500',
    },

    userInfo: {
        marginTop: 4,
    },

    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },

    userDetails: {
        fontSize: 16,
        color: '#666',
        marginBottom: 6,
    },

    donorLevel: {
        fontSize: 14,
        color: '#E74C3C',
        fontWeight: '600',
    },

    statsContainer: {
        flexDirection: 'row',
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

    statItem: {
        flex: 1,
        alignItems: 'center',
    },

    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E74C3C',
        marginBottom: 4,
    },

    statLabel: {
        fontSize: 12,
        color: '#666',
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
        borderLeftColor: '#2ECC71',
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
        color: '#2ECC71',
        fontWeight: '500',
    },

    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#2ECC71',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    checkboxChecked: {
        width: 10,
        height: 10,
        borderRadius: 2,
        backgroundColor: '#2ECC71',
    },

    actionsSection: {
        gap: 12,
    },

    primaryButton: {
        height: 55,
        backgroundColor: '#E74C3C',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },

    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

    secondaryButton: {
        height: 55,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E74C3C',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 3,
    },

    secondaryButtonText: {
        color: '#E74C3C',
        fontSize: 16,
        fontWeight: 'bold',
    },
});