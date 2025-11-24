import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { styles, COLORS } from './style';

interface BloodType {
  type: string;
  prevalence: string;
  donateTo: string[];
  receiveFrom: string[];
  description: string;
  color: string;
}

const BLOOD_TYPES: BloodType[] = [
  { type: 'O+', prevalence: '38%', donateTo: ['O+', 'A+', 'B+', 'AB+'], receiveFrom: ['O+', 'O-'], description: 'O doador universal de tipos positivos. Altamente solicitado!', color: COLORS.red500 },
  { type: 'O-', prevalence: '7%', donateTo: ['Todos'], receiveFrom: ['O-'], description: 'O Doador Universal. O mais valioso para emergências.', color: COLORS.red700 },
  { type: 'A+', prevalence: '34%', donateTo: ['A+', 'AB+'], receiveFrom: ['A+', 'A-', 'O+', 'O-'], description: 'Um tipo comum, essencial para transfusões.', color: COLORS.blue500 },
  { type: 'A-', prevalence: '6%', donateTo: ['A+', 'A-', 'AB+', 'AB-'], receiveFrom: ['A-', 'O-'], description: 'Doa para todos os tipos A e AB negativos e positivos.', color: COLORS.blue700 },
  { type: 'B+', prevalence: '9%', donateTo: ['B+', 'AB+'], receiveFrom: ['B+', 'B-', 'O+', 'O-'], description: 'Menos comum, mas muito importante.', color: COLORS.green500 },
  { type: 'B-', prevalence: '2%', donateTo: ['B+', 'B-', 'AB+', 'AB-'], receiveFrom: ['B-', 'O-'], description: 'Um dos tipos mais raros, doador importante para B e AB.', color: COLORS.green700 },
  { type: 'AB+', prevalence: '3%', donateTo: ['AB+'], receiveFrom: ['Todos'], description: 'O Recetor Universal. Pode receber de qualquer tipo.', color: COLORS.yellow500 },
  { type: 'AB-', prevalence: '1%', donateTo: ['AB+', 'AB-'], receiveFrom: ['A-', 'B-', 'AB-', 'O-'], description: 'O tipo mais raro. Recetor universal negativo.', color: COLORS.yellow700 },
];

export default function Compatibilidade() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const selectedData = useMemo(
    () => BLOOD_TYPES.find(b => b.type === selectedType),
    [selectedType]
  );

  const renderCompatibilityList = (types: string[]) => (
    <View style={styles.compatibilityContainer}>
      {types.map((type, index) => (
        <View key={index} style={styles.pill}>
          <Text style={styles.pillText}>{type}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🩸 Compatibilidade Sanguínea</Text>
      <Text style={styles.subtitle}>Selecione o seu tipo sanguíneo:</Text>

      
      <View style={styles.buttonsBox}>
        {BLOOD_TYPES.map(b => (
          <TouchableOpacity
            key={b.type}
            onPress={() => setSelectedType(b.type)}
            style={[
              styles.bloodButton,
              selectedType === b.type && { backgroundColor: b.color, borderColor: '#000' }
            ]}
          >
            <Text style={[styles.bloodButtonText, selectedType === b.type && { color: '#fff' }]}>
              {b.type}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

          {selectedData ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seu Tipo Selecionado: {selectedData.type}</Text>

          <View style={styles.statsBox}>
            <Text style={styles.statsText}>Prevalência Global:</Text>
            <Text style={styles.statsNumber}>{selectedData.prevalence}</Text>
          </View>

          <Text style={styles.description}>"{selectedData.description}"</Text>

         
          <View style={styles.boxDonate}>
            <Text style={styles.boxTitle}>Você pode doar para:</Text>
            {renderCompatibilityList(selectedData.donateTo)}
          </View>

          <View style={styles.boxReceive}>
            <Text style={styles.boxTitle}>Você pode receber de:</Text>
            {renderCompatibilityList(selectedData.receiveFrom)}
          </View>
        </View>
      ) : (
        <View style={styles.waitBox}>
          <Text style={styles.waitText}>
            Selecione seu tipo sanguíneo para ver as informações.
          </Text>
        </View>
      )}

      {/* BOTÃO FINAL
      <TouchableOpacity
        onPress={() => console.log("Checklist")}
        style={styles.nextButton}
      >
        <Text style={styles.nextButtonText}>Verificar Próximos Passos</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
}
