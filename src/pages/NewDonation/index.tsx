import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { styles } from './styles';
import { useAuth } from '@/src/hooks/useAuth';

export function NewDonation() {
    const navigation = useNavigation();
    const { user, logout, registerDonation } = useAuth();

    const [donationDate, setDonationDate] = useState<Date | null>(new Date());
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const [fontsLoaded] = useFonts({
                'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
                'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
                'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });

    const handleDateChange = useCallback((event: { type: string }, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDonationDate(selectedDate);
        }
    }, []);

    const handleLogout = useCallback(() => {
        Alert.alert(
            "Sair",
            "Tem certeza que deseja sair da sua conta?",
            [
                { text: "Cancelar", style: "cancel" },
                { text: "Sim, Sair", onPress: logout, style: "destructive" },
            ]
        );
    }, [logout]);

    const handleRegisterDonation = useCallback(async () => {
        if (!donationDate) {
            Alert.alert('Erro', 'Selecione a data da doação.');
            return;
        }

        if (!location.trim()) {
            Alert.alert('Erro', 'Informe o local da doação.');
            return;
        }

        if (donationDate > new Date()) {
            Alert.alert('Erro', 'A data da doação não pode ser futura.');
            return;
        }

        setLoading(true);

        try {
            const success = await registerDonation({
                date: format(donationDate, 'yyyy-MM-dd'),
                location: location.trim(),
            });

            if (success) {
                Alert.alert(
                    'Sucesso!', 
                    'Doação registrada com sucesso!\n\nCada doação pode salvar até 4 vidas! 🩸',
                    [
                        {
                            text: 'OK',
                            onPress: () => navigation.goBack()
                        }
                    ]
                );
            } else {
                Alert.alert('Erro', 'Falha ao registrar doação. Tente novamente.');
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha ao registrar doação. Tente novamente.');
        } finally {
            setLoading(false);
        }
    }, [donationDate, location, registerDonation, navigation]);

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>Registrar Nova Doação</Text>
                <Text style={styles.subtitle}>Registre sua doação para acompanhar seu histórico</Text>

                <Text style={styles.label}>Data da Doação *</Text>
                <TouchableOpacity
                    style={styles.datePickerButton}
                    onPress={() => setShowDatePicker(true)}
                    disabled={loading}
                >
                    <Text style={styles.datePickerText}>
                        {donationDate ? format(donationDate, 'dd/MM/yyyy') : 'Selecione a data'}
                    </Text>
                </TouchableOpacity>

                <Text style={styles.label}>Local da Doação *</Text>
                <TextInput
                    style={styles.input}
                    value={location}
                    onChangeText={setLocation}
                    placeholder="Ex: Hemocentro Regional de Guarapuava, Hemonúcleo de Teresópolis..."
                    placeholderTextColor="#999"
                    editable={!loading}
                    multiline
                    numberOfLines={3}
                    textAlignVertical="top"
                />

                <View style={styles.infoCard}>
                    <Text style={styles.infoTitle}>💡 Informação Importante</Text>
                    <Text style={styles.infoText}>
                        Cada doação de sangue pode salvar até <Text style={styles.highlight}>4 vidas</Text> diferentes!
                    </Text>
                </View>

                {showDatePicker && (
                    <DateTimePicker
                        value={donationDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={handleDateChange}
                        maximumDate={new Date()}
                    />
                )}

                <TouchableOpacity
                    style={[styles.registerButton, loading && styles.registerButtonDisabled]}
                    onPress={handleRegisterDonation}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.registerButtonText}>Registrar Doação</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => navigation.navigate('Profile')}
                    disabled={loading}
                >
                    <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default NewDonation;