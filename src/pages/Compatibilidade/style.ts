import { StyleSheet } from 'react-native';

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
    paddingVertical: 30,
    paddingHorizontal: 18,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    color: '#dc2626',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
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
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#ccc',
    margin: 5,
  },

  bloodButtonText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#333',
  },

  card: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    elevation: 5,
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
    color: '#b91c1c',
  },

  statsBox: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  statsText: {
    fontSize: 16,
    color: '#444',
  },

  statsNumber: {
    fontSize: 40,
    fontWeight: '900',
    color: '#4f46e5',
  },

  description: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
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

  boxTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
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

  pillText: {
    fontSize: 16,
    fontWeight: '600',
  },

  waitBox: {
    padding: 30,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 5,
  },

  waitText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#444',
  },

  nextButton: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#dc2626',
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },

  nextButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});
