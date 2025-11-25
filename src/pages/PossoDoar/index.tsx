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

import { styles } from './styles';
import { useFonts } from 'expo-font';

const DONATION_INTERVAL_MALE = 60;
const DONATION_INTERVAL_FEMALE = 90;

const [fontsLoaded] = useFonts({
    'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
    'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
    'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),        
});

export function PossoDoar() {
    const navigation = useNavigation();

    // Estados
    const [dateInput, setDateInput] = useState('');
    const [gender, setGender] = useState<'male' | 'female' | null>(null);
    const [result, setResult] = useState<{
        isApto: boolean;
        nextDate: string;
        daysRemaining: number;
    } | null>(null);

    const handleDateChange = (text: string) => {
        // Remove tudo que não é número
        let cleaned = text.replace(/[^0-9]/g, '');
        
        // Aplica a máscara
        if (cleaned.length >= 2) {
            cleaned = cleaned.substring(0, 2) + '/' + cleaned.substring(2);
        }
        if (cleaned.length >= 5) {
            cleaned = cleaned.substring(0, 5) + '/' + cleaned.substring(5, 9);
        }
        
        setDateInput(cleaned);
    };

    const handleCalculate = () => {
        Keyboard.dismiss();

        if (dateInput.length !== 10) {
            Alert.alert('Data Inválida', 'Por favor, digite a data completa no formato DD/MM/AAAA.');
            return;
        }
        if (!gender) {
            Alert.alert('Selecione o Gênero', 'O intervalo de doação varia conforme o gênero biológico.');
            return;
        }

        const lastDonationDate = parse(dateInput, 'dd/MM/yyyy', new Date());

        if (!isValid(lastDonationDate)) {
            Alert.alert('Data Inválida', 'A data informada não existe. Verifique o dia e o mês.');
            return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        if (lastDonationDate > today) {
            Alert.alert('Data Inválida', 'A data da última doação não pode ser no futuro.');
            return;
        }

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

                {/* --- Input de Data --- */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data da Última Doação</Text>
                    <View style={styles.dateButton}>
                        <TextInput
                            style={{ flex: 1, fontSize: 16, color: '#333', fontFamily: 'NeulisRegular' }}
                            placeholder="DD/MM/AAAA"
                            placeholderTextColor="#999"
                            keyboardType="numeric"
                            maxLength={10}
                            value={dateInput}
                            onChangeText={handleDateChange}
                        />
                        <Ionicons name="calendar-outline" size={20} color="#666" />
                    </View>
                </View>

                {/* --- Seleção de Gênero --- */}
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Gênero Biológico</Text>
                    <View style={styles.genderContainer}>
                        <TouchableOpacity 
                            style={[
                                styles.genderButton, 
                                gender === 'female' && styles.genderButtonSelected
                            ]}
                            onPress={() => setGender('female')}
                        >
                            <Text style={[
                                styles.genderText,
                                gender === 'female' && styles.genderTextSelected
                            ]}>Feminino</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[
                                styles.genderButton, 
                                gender === 'male' && styles.genderButtonSelected
                            ]}
                            onPress={() => setGender('male')}
                        >
                            <Text style={[
                                styles.genderText,
                                gender === 'male' && styles.genderTextSelected
                            ]}>Masculino</Text>
                        </TouchableOpacity>
                    </View>
                </View>

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