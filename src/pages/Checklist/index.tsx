import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles, itemStyles } from './style'; // Importa estilos

// Interface para um item do checklist
interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

// === PRÉ-REQUISITOS PARA DOAR SANGUE (INTEGRADOS NO CHECKLIST) ===
// Agora, os requisitos de doação estão diretamente neste checklist.
const PRE_DONATION_STEPS: ChecklistItem[] = [
  { id: 1, text: "Estar em boas condições de saúde.", completed: false },
  { id: 2, text: "Ter entre 16 e 69 anos (menores de 18 precisam de consentimento).", completed: false },
  { id: 3, text: "Pesar no mínimo 50 kg.", completed: false },
  { id: 4, text: "Estar descansado (ter dormido pelo menos 6 horas nas últimas 24h).", completed: false },
  { id: 5, text: "Estar alimentado (evitar jejum e alimentos gordurosos 4h antes).", completed: false },
  { id: 6, text: "Apresentar documento oficial com foto (RG, CNH, etc.).", completed: false },
  { id: 7, text: "Ter respeitado o intervalo entre doações (90 dias para mulheres, 60 para homens).", completed: false },
  // Você pode adicionar outros itens do seu checklist original aqui, se desejar.
  // Exemplo: { id: 8, text: "Verifiquei o endereço e horário do meu agendamento.", completed: false },
];

// Componente simples de Checkbox
const Checkbox: React.FC<{ checked: boolean, onPress: () => void }> = ({ checked, onPress }) => (
    <TouchableOpacity 
        style={[itemStyles.checkbox, checked && itemStyles.checked]} 
        onPress={onPress}
    >
        {checked && <Text style={itemStyles.checkText}>✓</Text>}
    </TouchableOpacity>
);

// DEFINIÇÃO DA TIPAGEM DAS ROTAS PARA NAVEGAÇÃO INTERNA:
export type RootStackParamList = {
    Compatibilidade: undefined; 
    Checklist: undefined; // Rota atual
    Home: undefined; // Rota de destino
};
// Usando os nomes de rota em português
type ChecklistScreenProps = StackScreenProps<RootStackParamList, 'Checklist'>;


const ChecklistScreen: React.FC<ChecklistScreenProps> = ({ navigation }) => {
  const [list, setList] = useState<ChecklistItem[]>(PRE_DONATION_STEPS);

  // Função para alternar o estado de conclusão de um item
  const toggleItem = (id: number) => {
    setList(list.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const allCompleted = list.every(item => item.completed);
  const remainingCount = list.filter(i => !i.completed).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Checklist Pré-Doação</Text> {/* Título ajustado */}
          <Text style={styles.subtitle}>
            Marque todos os itens que você cumpre para confirmar sua elegibilidade e preparação para doar.
          </Text>
          
          <View style={styles.listContainer}>
            {list.map((item) => (
              <View key={item.id} style={itemStyles.itemContainer}>
                <Checkbox 
                    checked={item.completed} 
                    onPress={() => toggleItem(item.id)} 
                />
                <Text style={[itemStyles.itemText, item.completed && itemStyles.itemCompleted]}>
                    {item.text}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity 
              style={[styles.button, !allCompleted && styles.buttonDisabled]}
              onPress={() => allCompleted && navigation.navigate('Home')}
              disabled={!allCompleted}
          >
              <Text style={styles.buttonText}>
                {allCompleted ? 'Confirmar e Voltar à Home' : `Complete ${remainingCount} Item${remainingCount !== 1 ? 's' : ''} Faltante${remainingCount !== 1 ? 's' : ''}`}
              </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChecklistScreen;