import { StyleSheet, Dimensions, TextStyle, ViewStyle } from 'react-native';

// Obtém a largura da tela para ajustar o layout responsivamente
const { width } = Dimensions.get('window');

// Define as interfaces de tipos para garantir a tipagem do StyleSheet
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

// Definições de Estilos para React Native
export const styles = StyleSheet.create<Style>({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9FAFB', // gray-50
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
    fontSize: width > 600 ? 40 : 30, // Tamanho de fonte responsivo
    fontWeight: '800',
    color: '#991B1B', // red-800
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#DC2626', // red-600
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  section: {
    marginBottom: 30,
    width: '100%',
  },
  h2: {
    fontSize: width > 600 ? 28 : 22, // Tamanho de fonte responsivo
    fontWeight: '700',
    color: '#1F2937', // gray-800
    paddingBottom: 5,
    marginBottom: 15,
    borderBottomWidth: 3,
    borderBottomColor: '#EF4444', // red-500
  },
  sectionText: {
    color: '#374151', // gray-700
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
  },
  cardsRow: {
    flexDirection: width > 600 ? 'row' : 'column',
    justifyContent: 'space-between',
    // 'gap' não é suportado por todas as versões do React Native, usamos margem
    marginLeft: width > 600 ? -10 : 0,
    marginRight: width > 600 ? -10 : 0,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    flex: width > 600 ? 1 : 0, // Metade da largura em ecrãs mais largos
    marginHorizontal: width > 600 ? 10 : 0,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Sombra para Android
    borderWidth: 1,
    borderColor: '#FEE2E2', // red-100
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    fontSize: 28,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#B91C1C', // red-700
  },
  cardContent: {
    flexGrow: 1,
  },
  listText: {
    fontSize: 14,
    color: '#4B5563', // gray-600
    lineHeight: 20,
    marginBottom: 5,
    flexShrink: 1,
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
    color: '#4B5563',
  },
  boldText: {
    fontWeight: '600',
  },
  warningBox: {
    backgroundColor: '#FFFBEB', // yellow-50
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B', // yellow-500
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
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B45309', // yellow-800
  },
  warningBullet: {
    marginRight: 5,
    fontSize: 14,
    color: '#B45309',
  },
  warningText: {
    fontSize: 14,
    color: '#B45309', // yellow-700
    lineHeight: 20,
    flexShrink: 1,
  },
  alertBox: {
    backgroundColor: '#FEF2F2', // red-50
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444', // red-500
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
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#B91C1C', // red-800
  },
  alertText: {
    fontSize: 13,
    color: '#B91C1C', // red-700
    lineHeight: 18,
  },
  footer: {
    marginTop: 30,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB', // gray-200
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#6B7280', // gray-500
    textAlign: 'center',
  },
});