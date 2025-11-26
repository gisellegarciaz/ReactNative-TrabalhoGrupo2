import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { styles } from './styles';
import HeaderComponent from '../../components/Header';
import { useAuth } from '@/src/hooks/useAuth';

export function NewDonation() {
    const navigation = useNavigation();
    const { user, logout } = useAuth();

    const [donationDate, setDonationDate] = useState<Date | null>(new Date());
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDonationDate(selectedDate);
        }
    };

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

    const handleRegisterDonation = async () => {
        if (!donationDate) {
            Alert.alert('Erro', 'Selecione a data da doação.');
            return;
        }

        if (!location.trim()) {
            Alert.alert('Erro', 'Informe o local da doação.');
            return;
        }

        setLoading(true);

        try {
            
            Alert.alert(
                'Sucesso', 
                'Doação registrada com sucesso!',
                [
                    {
                        text: 'OK',
                        onPress: () => navigation.goBack()
                    }
                ]
            );
        } catch (error) {
            Alert.alert('Erro', 'Falha ao registrar doação. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
                <Text style={styles.loadingText}>Carregando...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <HeaderComponent username={user.name} logoff={handleLogout} />

            <Text style={styles.headerTitle}>Registrar nova doação</Text>

            <Text style={styles.label}>Data</Text>
            <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => setShowDatePicker(true)}
                disabled={loading}
            >
                <Text style={styles.datePickerText}>
                    {donationDate ? format(donationDate, 'dd/MM/yyyy') : 'dd/mm/aaaa'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Local</Text>
            <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Informe o local da doação"
                placeholderTextColor="#999"
                editable={!loading}
            />

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
                    <Text style={styles.registerButtonText}>Registrar</Text>
                )}
            </TouchableOpacity>
        </ScrollView>
    );
}

export default NewDonation