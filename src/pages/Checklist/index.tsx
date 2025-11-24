import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { styles, itemStyles } from './style'; 
import { useNavigation } from '@react-navigation/native';


interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

const PRE_DONATION_STEPS: ChecklistItem[] = [
  { id: 1, text: "Estar em boas condições de saúde.", completed: false },
  { id: 2, text: "Ter entre 16 e 69 anos (menores de 18 precisam de consentimento).", completed: false },
  { id: 3, text: "Pesar no mínimo 50 kg.", completed: false },
  { id: 4, text: "Estar descansado (ter dormido pelo menos 6 horas nas últimas 24h).", completed: false },
  { id: 5, text: "Estar alimentado (evitar jejum e alimentos gordurosos 4h antes).", completed: false },
  { id: 6, text: "Apresentar documento oficial com foto (RG, CNH, etc.).", completed: false },
  { id: 7, text: "Ter respeitado o intervalo entre doações (90 dias para mulheres, 60 para homens).", completed: false },
  
];


const Checkbox: React.FC<{ checked: boolean, onPress: () => void }> = ({ checked, onPress }) => (
    <TouchableOpacity 
        style={[itemStyles.checkbox, checked && itemStyles.checked]} 
        onPress={onPress}
    >
        {checked && <Text style={itemStyles.checkText}>✓</Text>}
    </TouchableOpacity>
);


export type RootStackParamList = {
    Compatibilidade: undefined; 
    Checklist: undefined; 
    Home: undefined; 
};

const ChecklistScreen: React.FC = ( ) => {
  const [list, setList] = useState<ChecklistItem[]>(PRE_DONATION_STEPS);
  const navigation = useNavigation<any>(); 

 
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