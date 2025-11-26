import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, ActivityIndicator, FlatList, ImageSourcePropType } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { format, addDays, differenceInDays } from 'date-fns';
import { styles } from './style';
import { useAuth } from '../../hooks/useAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from '../../components/Header';
import Badge from '../../components/CardBadges/index';
import { BADGES_DATA } from '../../components/CardBadges/badgesData';
import { CardHome } from '../../components/CardHome';

import MascoteNutricao from '../../assets/CardHomeImages/MascoteNutricao.png';
import MascoteDoador from '../../assets/CardHomeImages/MascoteDoador.png';
import MascoteProxDoacao from '../../assets/CardHomeImages/MascoteProxDoacao2.png';
import Quemdoa from '../../assets/Mascote/Quemdoapraquem.png';
import MascoteCuriosidades from '../../assets/CardHomeImages/MascoteCuriosidades.png';

type NavigationProps = {
    navigate: (screen: string) => void;
};

const DONATION_INTERVAL_MALE = 60;
const DONATION_INTERVAL_FEMALE = 90;

export function Home() {
    const navigation = useNavigation<NavigationProps>();
    const { user, logout } = useAuth();

    const [statusMessage, setStatusMessage] = useState('Atualize seu perfil para calcular seu prazo.');
    const [nextDonationDate, setNextDonationDate] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
        'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
        'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
        'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });

    const calculateNextDate = useCallback(() => {
        if (!user || !user.lastDonation || !user.gender) {
            setStatusMessage('Seus dados estão incompletos. Por favor, atualize seu perfil.');
            setNextDonationDate(null);
            setIsReady(false);
            return;
        }

        try {
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
            "Sair",
            "Tem certeza que deseja sair da sua conta?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sim, Sair", onPress: logout, style: "destructive" },
            ]
        );
    };

    const renderBadge = ({ item }: { item: typeof BADGES_DATA[0] }) => (
                <View style={styles.gridItem}>
                    <Badge
                        label={item.label}
                        imageSrc={item.image}
                        goal={item.goal}
                        donations={user?.totalDonations || 0}  //user.donations.length
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

    return (
        <SafeAreaView style={{ flexGrow: 1, backgroundColor: '#FFF8E7'}} edges={['left', 'right']} >
            <HeaderComponent username={user.name} logoff={handleLogout} />
            <View style={{ width: '100%' }}>
                <Text style={styles.badgesText}> Badges conquistadas: </Text>
            </View>
            <FlatList
                data={BADGES_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderBadge}
                contentContainerStyle={styles.listContent}
                style={{ flexGrow: 0 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
                bounces={false}
            />

            <ScrollView
                contentContainerStyle={[ styles.container, {flexGrow: 0, paddingBottom: 120}  ]}
                showsVerticalScrollIndicator={false}>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                
                <View>
                    <Text style={styles.homeText}> Mantenha-se informado: </Text>
                </View>

                <CardHome 
                    imageSrc={MascoteDoador as ImageSourcePropType}
                    title="Quando posso doar novamente?"
                    onPress={() => navigation.navigate('ProximaDoacao')}
                />

                <CardHome 
                    imageSrc={MascoteNutricao as ImageSourcePropType}
                    title="Dicas de Alimentação"
                    onPress={() => navigation.navigate('Nutricao')}
                />
                
                <CardHome 
                    imageSrc={Quemdoa as ImageSourcePropType}
                    title="Quem doa para quem?"
                    onPress={() => navigation.navigate('Compatibilidade')}
                />

                <CardHome 
                    imageSrc={MascoteCuriosidades as ImageSourcePropType}
                    title="Curiosidades sobre o sangue"
                    onPress={() => navigation.navigate('Curiosidade')}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}
