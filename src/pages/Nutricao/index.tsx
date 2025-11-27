import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styles';
interface InfoCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, icon }) => (
  <View style={styles.cardContainer}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardIcon}>{icon}</Text>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View style={styles.cardContent}>{children}</View>
  </View>
);


const Nutricao: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>

          <Text style={styles.h1}>🩸 Guia de Nutrição para Doação de Sangue</Text>

          <Text style={styles.subtitle}>Recomendações essenciais para antes e depois do seu ato de generosidade.</Text>
        </View>

        <View style={styles.mainContent}>

          <View style={styles.section}>
            <Text style={styles.h2}>1. Nutrição PRÉ-DOAÇÃO</Text>
            <Text style={styles.sectionText}>
              O foco principal é garantir hidratação máxima, otimizar os níveis de ferro e evitar alimentos que possam interferir nos testes de triagem.
            </Text>

            <View style={styles.cardsRow}>

              <InfoCard title="Hidratação é a Chave" icon="💧">
                <Text style={styles.listText}>Um corpo bem hidratado mantém o volume sanguíneo, o que facilita a coleta e reduz o risco de reações adversas (tonturas, desmaios).</Text>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}>Beba 4 a 6 copos (1 a 1.5 litros) de água ou bebidas não-alcoólicas nas 3 horas que antecedem a doação.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}>Reduza o consumo de café e chá preto 24 horas antes.</Text>
                </View>
              </InfoCard>


              <InfoCard title="Foco no Ferro e Vitamina C" icon="🥦">
                <Text style={styles.listText}>O ferro é vital para repor as células vermelhas. A Vitamina C potencializa a sua absorção.</Text>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Ferro Heme:</Text> Carne vermelha magra, aves, peixe. (Fácil absorção)</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Ferro Não-Heme:</Text> Feijão, lentilhas, espinafres, tofu.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Vitamina C:</Text> Laranjas, morangos, pimentos. (Combine com ferro não-heme!)</Text>
                </View>
              </InfoCard>
            </View>

            <View style={styles.warningBox}>
              <View style={styles.warningHeader}>
                <Text style={styles.warningIcon}>🚫</Text>
                <Text style={styles.warningTitle}>O que EVITAR (24 Horas Antes)</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.warningBullet}>-</Text>
                <Text style={styles.warningText}><Text style={styles.boldText}>Alimentos Gordurosos:</Text> Evite fritos, fast food e leite gordo.</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.warningBullet}>-</Text>
                <Text style={styles.warningText}><Text style={styles.boldText}>Jejum:</Text> NUNCA doe em jejum. Faça uma refeição leve.</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.warningBullet}>-</Text>
                <Text style={styles.warningText}><Text style={styles.boldText}>Álcool:</Text> Evitar 24 horas antes.</Text>
              </View>
            </View>
          </View>


          <View style={styles.section}>
            <Text style={styles.h2}>2. Nutrição PÓS-DOAÇÃO</Text>
            <Text style={styles.sectionText}>
              A prioridade imediata é repor o volume de fluidos perdido e restaurar os níveis de energia rapidamente.
            </Text>

            <View style={styles.cardsRow}>

              <InfoCard title="Reposição Imediata de Fluidos" icon="🥤">
                <Text style={styles.listText}>A reposição do volume de plasma é a prioridade zero após a doação.</Text>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}>Consuma o lanche e a bebida oferecidos no local.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}>Beba 4 copos adicionais de líquido nas horas seguintes.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Proibido:</Text> O álcool deve ser evitado nas 24 horas seguintes.</Text>
                </View>
              </InfoCard>


              <InfoCard title="Refeição de Recuperação" icon="🍽️">
                <Text style={styles.listText}>Faça uma refeição completa para iniciar a regeneração celular.</Text>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Ferro:</Text> Continue a consumir fontes ricas em ferro.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Energia:</Text> Priorize hidratos de carbono complexos (pão, arroz) para energia.</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.listBullet}>•</Text>
                  <Text style={styles.listText}><Text style={styles.boldText}>Descanso:</Text> Evite exercício físico intenso por 24 horas.</Text>
                </View>
              </InfoCard>
            </View>
          </View>


          <View style={styles.alertBox}>
            <View style={styles.alertHeader}>
              <Text style={styles.alertIcon}>⚠️</Text>
              <Text style={styles.alertTitle}>Lembrete de Segurança</Text>
            </View>
            <Text style={styles.alertText}>
              Se sentir tonturas, náuseas, fraqueza ou dor no local da punção após sair do centro, deite-se imediatamente com os pés elevados e beba mais líquidos. Consulte o centro de doação ou um médico se os sintomas persistirem.
            </Text>
          </View>
        </View>


        <View style={styles.footer}>
          <Text style={styles.footerText}>A sua doação salva vidas. Este guia foi elaborado para otimizar a sua segurança e recuperação.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Nutricao;