import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles';


const curiosities = [
  {
    id: '1',
    title: 'O Sangue Não Pode Ser Sintetizado',
    icon: '🧪',
    description: 'Apesar de todos os avanços, o sangue não pode ser fabricado em laboratório. O sangue doado é o único suprimento disponível para transfusões, pois a ciência ainda não conseguiu replicar as funções complexas de todas as suas células.',
  },
  {
    id: '2',
    title: 'A Reposição Contínua do Corpo',
    icon: '🩸',
    description: 'Após doar, o corpo repõe o plasma em 24 a 48 horas. As células vermelhas (eritrócitos) demoram aproximadamente 8 a 12 semanas para serem repostas, daí a importância de respeitar os intervalos entre doações.',
  },
  {
    id: '3',
    title: 'O Dador Universal (O Negativo)',
    icon: '🅾️',
    description: 'O tipo sanguíneo O Negativo (O-) pode ser transfundido para quase todos os pacientes. Por isso, este grupo é vital e é o primeiro a ser usado em situações de emergência sem tempo para testes de compatibilidade.',
  },
  {
    id: '4',
    title: 'O Recetor Universal (AB Positivo)',
    icon: '🅰️🅱️',
    description: 'O tipo sanguíneo AB Positivo (AB+) é o recetor universal. Indivíduos com este tipo de sangue podem receber sangue de qualquer outro grupo sanguíneo (A, B, AB ou O).',
  },
  {
    id: '5',
    title: 'Doação de Componentes (Aférese)',
    icon: '✨',
    description: 'É possível doar apenas plasma ou plaquetas através da Aférese. Uma máquina separa o componente e devolve o restante do sangue ao dador, permitindo doações mais frequentes, já que plasma e plaquetas são repostos mais rapidamente.',
  },
  {
    id: '6',
    title: 'Um Gesto, Múltiplas Vidas',
    icon: '🎁',
    description: 'Uma única doação de sangue total é separada em vários componentes (Glóbulos Vermelhos, Plaquetas, Plasma), o que significa que pode potencialmente salvar até três vidas diferentes.',
  },
];


interface CuriosityCardProps {
  item: typeof curiosities[0];
}

const CuriosityCard: React.FC<CuriosityCardProps> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.cardContainer}>
    
      <TouchableOpacity onPress={toggleExpand} style={styles.cardHeader}>
        <Text style={styles.cardIcon}>{item.icon}</Text>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.expandIndicator}>{isExpanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

   
      {isExpanded && (
        <View style={styles.cardContent}>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      )}
    </View>
  );
};


const Curiosidade = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#C62828" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Curiosidades da Doação de Sangue</Text>
        <Text style={styles.headerSubtitle}>Toque para ler mais sobre o seu impacto.</Text>
      </View>

      <FlatList
        data={curiosities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CuriosityCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ height: 30 }} />} 
      />
    </SafeAreaView>
  );
};
export default Curiosidade;