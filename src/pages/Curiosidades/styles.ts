import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  header: {
    backgroundColor: '#C62828',
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
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderLeftWidth: 5,
    borderLeftColor: '#E53935', 
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFF',
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 10,
    color: '#E53935',
  },
  cardTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  expandIndicator: {
    fontSize: 18,
    color: '#E53935',
    fontWeight: 'bold',
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
    color: '#555555',
    lineHeight: 24,
  },
});
