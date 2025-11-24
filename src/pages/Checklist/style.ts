import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Interface para os estilos principais
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

// Interface para os estilos dos itens (checklist item)
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
    backgroundColor: '#F7F7F7',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  listContainer: {
    backgroundColor: '#FFF',
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
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9', // Cor cinza para desabilitado
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
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
        borderColor: '#E74C3C',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    checked: {
        backgroundColor: '#E74C3C',
        borderColor: '#E74C3C',
    },
    checkText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    itemCompleted: {
        textDecorationLine: 'line-through',
        color: '#A9A9A9',
    }
});