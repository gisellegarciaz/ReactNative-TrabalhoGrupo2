import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { format, addDays, differenceInDays } from 'date-fns';

import { styles } from './style';
import { useAuth } from '../../hooks/useAuth';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderComponent from '../../components/Header';
import Badge from '../../components/CardBadges/index';
import { BADGES_DATA } from '../../components/CardBadges/badgesData';

type NavigationProps = {
    navigate: (screen: string) => void;
};

const DONATION_INTERVAL_MALE = 60;
const DONATION_INTERVAL_FEMALE = 90;

// Exportação nomeada correta (export function)
export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const { user, logout } = useAuth();

    const [statusMessage, setStatusMessage] = useState('Atualize seu perfil para calcular seu prazo.');
    const [nextDonationDate, setNextDonationDate] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false);

    const calculateNextDate = useCallback(() => {
        // A verificação inicial é crucial
        if (!user || !user.lastDonation || !user.gender) {
            setStatusMessage('Seus dados estão incompletos. Por favor, atualize seu perfil.');
            setNextDonationDate(null);
            setIsReady(false);
            return;
        }

        try {
            // A tipagem 'user' já garante que esses campos são Strings/Dates aqui
            const lastDonationDate = new Date(user.lastDonation);
            const interval = user.gender === 'male' ? DONATION_INTERVAL_MALE : DONATION_INTERVAL_FEMALE;
            const nextPossibleDate = addDays(lastDonationDate, interval);
            const today = new Date();

            const daysRemaining = differenceInDays(nextPossibleDate, today);

            if (daysRemaining <= 0) {
                setStatusMessage('Você está APTO para doar sangue!');
                setNextDonationDate(`Data da Última Doação: ${format(lastDonationDate, 'dd/MM/yyyy')}`);
                setIsReady(true);
            } else {
                setStatusMessage(`Faltam ${daysRemaining} dias para você poder doar novamente.`);
                setNextDonationDate(format(nextPossibleDate, 'dd/MM/yyyy'));
                setIsReady(false);
            }
        } catch (e) {
            console.error(e);
            setStatusMessage('Erro ao calcular prazo. Verifique a data de última doação.');
            setIsReady(false);
        }
    }, [user]);

    useEffect(() => {
        calculateNextDate();
    }, [user, calculateNextDate]);

    const handleLogout = () => {
        Alert.alert(
            'Sair',
            'Tem certeza que deseja sair da sua conta?',
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Sim, Sair', onPress: logout, style: 'destructive' },
            ]
        );
    };

    // Função de renderização movida para dentro do componente principal para garantir acesso ao 'user'
    // E corrigida para usar o encadeamento opcional '?'
    const renderBadge = ({ item }: { item: typeof BADGES_DATA[0] }) => (
        <View style={styles.gridItem}>
            <Badge
                label={item.label}
                imageSrc={item.image}
                goal={item.goal}
                // CORREÇÃO: Usando 'user?.totalDonations' para garantir que não acessamos
                // 'totalDonations' se 'user' for null, embora o 'if (!user)' abaixo já cubra isso.
                donations={user?.totalDonations ?? 0}
            />
        </View>
    );

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
                <Text style={styles.loadingText}>Carregando dados do usuário...</Text>
            </View>
        );
    }

    // A partir daqui, o TypeScript sabe que 'user' não é null.

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8E7' }} edges={['left', 'right']}>
            
            <HeaderComponent username={user.name} logoff={handleLogout} />

            {/* BADGES */}
            <FlatList
                data={BADGES_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderBadge}
                contentContainerStyle={styles.listContent}
                style={{ flexGrow: 0 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            {/* BOX DE STATUS */}
            <View
                style={[
                    styles.statusBox,
                    isReady ? styles.statusBoxReady : styles.statusBoxWaiting,
                ]}
            >
                <View style={styles.statusMessageContainer}>
                    <Text style={styles.statusMessageText}>{statusMessage}</Text>
                </View>

                {nextDonationDate && (
                    <Text style={styles.statusDateText}>{nextDonationDate}</Text>
                )}
            </View>

            {/* BOTÕES */}
            <ScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.actionButtonText}>Atualizar Dados e Última Doação</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Location')}
                >
                    <Text style={styles.actionButtonText}>Encontrar Hemocentros Próximos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Compatibilidade')}
                >
                    <Text style={styles.actionButtonText}>Teste sua compatibilidade</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Checklist')}
                >
                    <Text style={styles.actionButtonText}>Faça o seu checklist</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Nutricao')}
                >
                    <Text style={styles.actionButtonText}>Dicas de alimentação</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={() => navigation.navigate('Curiosidade')}
                >
                    <Text style={styles.actionButtonText}>Confira curiosidades</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}