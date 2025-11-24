import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { styles } from './styles';
import { useAuth } from '@/src/hooks/useAuth';


type GenderType = 'male' | 'female' | '';

export function Profile() {
    const navigation = useNavigation();

    const { user, saveDonorData } = useAuth();

    const [gender, setGender] = useState<GenderType>(user?.gender || '');
    const [birthDate, setBirthDate] = useState<Date | null>(user?.birthDate ? new Date(user.birthDate) : null);
    const [lastDonation, setLastDonation] = useState<Date | null>(user?.lastDonation ? new Date(user.lastDonation) : null);
    const [loading, setLoading] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [datePickerField, setDatePickerField] = useState<'birthDate' | 'lastDonation' | null>(null);

    useEffect(() => {
        if (user) {
            setGender(user.gender || '');
            setBirthDate(user.birthDate ? new Date(user.birthDate) : null);
            setLastDonation(user.lastDonation ? new Date(user.lastDonation) : null);
        }
    }, [user]);

    const handleDateChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            if (datePickerField === 'birthDate') {
                setBirthDate(selectedDate);
            } else if (datePickerField === 'lastDonation') {
                setLastDonation(selectedDate);
            }
        }
    };

    const showPicker = (field: 'birthDate' | 'lastDonation') => {
        setDatePickerField(field);
        setShowDatePicker(true);
    };

    const handleSave = async () => {
        if (!user || !gender || !birthDate) {
            Alert.alert('Erro', 'Preencha Gênero e Data de Nascimento.');
            return;
        }

        setLoading(true);

        const dataToSave = {
            gender,
            birthDate: birthDate.toISOString(),
            lastDonation: lastDonation ? lastDonation.toISOString() : undefined,
        };

        const success = await saveDonorData(dataToSave);

        if (success) {
            Alert.alert('Sucesso', 'Dados do doador atualizados!');
            navigation.goBack();
        } else {
            Alert.alert('Erro', 'Falha ao salvar os dados. Tente novamente.');
        }

        setLoading(false);
    };

    if (!user) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
                <Text style={styles.subtitle}>Carregando perfil...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.headerTitle}>Meus Dados</Text>
            <Text style={styles.subtitle}>Atualize suas informações para calcularmos seu prazo de doação.</Text>

            <Text style={styles.label}>Nome de Usuário (login):</Text>
            <TextInput
                style={[styles.input, { backgroundColor: '#EEE' }]}
                value={user.user}
                editable={false}
            />

            <Text style={styles.label}>Gênero:</Text>
            <View style={styles.genderContainer}>
                <TouchableOpacity
                    style={[styles.genderButton, gender === 'male' && styles.genderSelected]}
                    onPress={() => setGender('male')}
                    disabled={loading}
                >
                    <Text style={[styles.genderText, gender === 'male' && styles.textSelected]}>Masculino</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.genderButton, gender === 'female' && styles.genderSelected]}
                    onPress={() => setGender('female')}
                    disabled={loading}
                >
                    <Text style={[styles.genderText, gender === 'female' && styles.textSelected]}>Feminino</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.label}>Data de Nascimento:</Text>
            <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => showPicker('birthDate')}
                disabled={loading}
            >
                <Text style={styles.datePickerText}>
                    {birthDate ? format(birthDate, 'dd/MM/yyyy') : 'Selecione a Data'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Data da Última Doação (Opcional):</Text>
            <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => showPicker('lastDonation')}
                disabled={loading}
            >
                <Text style={styles.datePickerText}>
                    {lastDonation ? format(lastDonation, 'dd/MM/yyyy') : 'Selecione a Data'}
                </Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={datePickerField === 'birthDate' ? (birthDate || new Date()) : (lastDonation || new Date())}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    maximumDate={new Date()}
                />
            )}

            <TouchableOpacity
                style={styles.saveButton}
                onPress={handleSave}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.saveButtonText}>SALVAR DADOS</Text>
                )}
            </TouchableOpacity>

        </ScrollView>
    );
}