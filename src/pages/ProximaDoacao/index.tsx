import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    Keyboard
} from 'react-native';
import { addDays, differenceInDays, parse, isValid, format } from 'date-fns';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Para ícone de voltar, se quiser

import { styles } from './styles'
import { useFonts } from 'expo-font';
import { useAuth } from '@/src/hooks/useAuth';

const DONATION_INTERVAL_MALE = 60;
const DONATION_INTERVAL_FEMALE = 90;



export function ProximaDoacao() {

    const [fontsLoaded] = useFonts({
        'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
        'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
        'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });

    const navigation = useNavigation();

    // Estados

    const { user } = useAuth();
    const gender = user?.gender;
    const lastDonation = user?.lastDonation;
    const [result, setResult] = useState<{
        isApto: boolean;
        nextDate: string;
        daysRemaining: number;
    } | null>(null);



    const handleCalculate = () => {
        
        if (!gender) {
            Alert.alert("Você não informou o gênero no seu perfil.")
            return;
        }

        let lastDonationDate: Date;

        if (lastDonation) {
            lastDonationDate = parse(lastDonation, 'yyyy-MM-dd', new Date());
        } else {
            setResult({
                isApto: true,
                nextDate: format(new Date(), 'dd/MM/yyyy'),
                daysRemaining: 0
            });
            return;
        }

        if (!isValid(lastDonationDate)) {
            Alert.alert("Data de última doação inválida");
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // 3. Cálculo
        const interval = gender === 'male' ? DONATION_INTERVAL_MALE : DONATION_INTERVAL_FEMALE;
        const nextPossibleDate = addDays(lastDonationDate, interval);

        const daysRemaining = differenceInDays(nextPossibleDate, today);

        setResult({
            isApto: daysRemaining <= 0,
            nextDate: format(nextPossibleDate, 'dd/MM/yyyy'),
            daysRemaining: daysRemaining > 0 ? daysRemaining : 0
        });
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF8E7' }} edges={['top']}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* Cabeçalho Simples */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5 }}>
                        <Ionicons name="arrow-back" size={24} color="#333" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.title}>Calculadora de Doação</Text>
                <Text style={styles.subtitle}>
                    Descubra quando você poderá doar sangue novamente com base na sua última doação.
                </Text>

                
                {/* --- Botão Calcular --- */}
                <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
                    <Text style={styles.calculateButtonText}>Calcular Data</Text>
                </TouchableOpacity>

                {/* --- Resultado --- */}
                {result && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultTitle}>
                            {result.isApto ? 'Você já pode doar!' : 'Aguarde um pouco'}
                        </Text>

                        <Text style={styles.resultDate}>{result.nextDate}</Text>

                        <Text style={styles.resultMessage}>
                            {result.isApto
                                ? 'Seu intervalo de recuperação já foi cumprido. Agende sua doação hoje mesmo!'
                                : `Faltam apenas ${result.daysRemaining} dias para você poder salvar vidas novamente.`
                            }
                        </Text>
                    </View>
                )}

            </ScrollView>
        </SafeAreaView>
    );
}