import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { styles } from './styles';
import { useAuth } from '@/src/hooks/useAuth';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type NavigationProps = {
    navigate: (screen: string) => void;
};

export function Profile() {
    const navigation = useNavigation<NavigationProps>();
    const { user, calculateLivesSaved } = useAuth();

    const [loading] = useState(false);
    const [lastDonationFormatted, setLastDonationFormatted] = useState<string>('Nenhuma doação registrada');

    const [fontsLoaded] = useFonts({
            'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
            'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
            'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });

    useFocusEffect(
        useCallback(() => {
            if (user?.lastDonation) {
                try {
                    const lastDonationDate = new Date(user.lastDonation);
                    setLastDonationFormatted(format(lastDonationDate, "EEE, d 'de' MMM", { locale: ptBR }));
                } catch (error) {
                    setLastDonationFormatted('Data inválida');
                }
            } else {
                setLastDonationFormatted('Nenhuma doação registrada');
            }
        }, [user?.lastDonation])
    );


    const calculateAge = useCallback(() => {
        if (!user?.birthDate) return 'Idade não informada';
        try {
            const today = new Date();
            const birthDate = new Date(user.birthDate);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return `${age} anos`;
        } catch (error) {
            return 'Idade não informada';
        }
    }, [user?.birthDate]);

    const getGenderDisplay = (gender: string | undefined): string => {
        switch (gender) {
            case 'male':
                return 'Masculino';
            case 'female':
                return 'Feminino';
            default:
                return 'Não informado';
        }
    };

    const navigateToEdit = useCallback(() => {
        navigation.navigate('ProfileEdit');
    }, [navigation]);

    const navigateToNewDonation = useCallback(() => {
        navigation.navigate('NewDonation');
    }, [navigation]);

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
                <Text style={styles.subtitle}>Carregando perfil...</Text>
            </View>
        );
    }

    const donationCount = user?.totalDonations || 0;
    const livesSaved = calculateLivesSaved(donationCount);

    const getLevel = (donations: number) => {
        if (donations >= 10) return 'Nível 5 - Doador Master';
        if (donations >= 7) return 'Nível 4 - Doador Avançado';
        if (donations >= 4) return 'Nível 3 - Doador Regular';
        if (donations >= 1) return 'Nível 2 - Doador Iniciante';
        return 'Nível 1 - Novato';
    };

    const getLevelColor = (donations: number) => {
        if (donations >= 10) return '#E74C3C';
        if (donations >= 7) return '#E67E22';
        if (donations >= 4) return '#F1C40F';
        if (donations >= 1) return '#2ECC71';
        return '#95A5A6';
    };

    return (
        <ScrollView>
            <View style={styles.contentContainer}>
                <Text style={styles.headerTitle}>{user.name}</Text>
                <Text style={styles.headerTitleLitle}>
                    {calculateAge()}, {getGenderDisplay(user.gender || '')}
                </Text>

                <View style={styles.levelBadge}>
                    <Text style={[styles.levelText, { color: getLevelColor(donationCount) }]}>
                        {getLevel(donationCount)}
                    </Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.infoValue}>{donationCount}</Text>
                        <Text style={styles.infoLabel}>Doações</Text>
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.infoValue}>{user.bloodType || 'Não informado'}</Text>
                        <Text style={styles.infoLabel}>Tipo sanguíneo</Text>
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.infoValue}>{livesSaved}</Text>
                        <Text style={styles.infoLabel}>Vidas salvas</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Última Doação</Text>
                    
                    <View style={styles.donationCard}>
                        <View style={styles.donationInfo}>
                            <Text style={styles.donationDate}>{lastDonationFormatted}</Text>
                            {user.lastDonation && (
                                <View style={styles.hospitalTag}>
                                    <Text style={styles.hospitalText}>Registrada</Text>
                                </View>
                            )}
                        </View>
                        {!user.lastDonation && (
                            <Text style={styles.noDonationText}>
                                Você ainda não registrou nenhuma doação
                            </Text>
                        )}
                    </View>
                </View>

                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={styles.editButton}
                        onPress={navigateToEdit}
                        disabled={loading}
                    >
                        <Text style={styles.editButtonText}>Editar meus dados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.donationButton}
                        onPress={navigateToNewDonation}
                        disabled={loading}
                    >
                        <Text style={styles.donationButtonText}>Cadastrar nova doação</Text>
                    </TouchableOpacity>
                </View>

                {donationCount > 0 && (
                    <View style={styles.achievementCard}>
                        <Text style={styles.achievementTitle}>🎉 Parabéns!</Text>
                        <Text style={styles.achievementText}>
                            Você já salvou aproximadamente {livesSaved} vidas com suas doações!
                        </Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}