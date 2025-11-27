import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator
} from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { styles } from './styles';
import { useAuth } from '@/src/hooks/useAuth';

type GenderType = 'male' | 'female' | '';

const BLOOD_TYPES = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export function ProfileEdit() {
    const navigation = useNavigation();
    const { user, saveDonorData } = useAuth();

    const [name, setName] = useState(user?.name || '');
    const [gender, setGender] = useState<GenderType>(user?.gender || '');
    const [birthDate, setBirthDate] = useState<Date | null>(user?.birthDate ? new Date(user.birthDate) : null);
    const [bloodType, setBloodType] = useState<string>(user?.bloodType || '');
    const [loading, setLoading] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);

    const [fontsLoaded] = useFonts({
                    'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
                    'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
                    'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setGender(user.gender || '');
            setBirthDate(user.birthDate ? new Date(user.birthDate) : null);
            setBloodType(user.bloodType || '');
        }
    }, [user]);

    const handleDateChange = useCallback((event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthDate(selectedDate);
        }
    }, []);

    const handleSave = useCallback(async () => {
        if (!user) {
            Alert.alert('Erro', 'Usuário não encontrado.');
            return;
        }

        if (!name.trim()) {
            Alert.alert('Erro', 'Preencha o nome.');
            return;
        }

        if (!gender) {
            Alert.alert('Erro', 'Selecione o gênero.');
            return;
        }

        if (!birthDate) {
            Alert.alert('Erro', 'Selecione a data de nascimento.');
            return;
        }

        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;

        if (actualAge < 16) {
            Alert.alert('Erro', 'É necessário ter pelo menos 16 anos para ser doador.');
            return;
        }

        if (actualAge > 100) {
            Alert.alert('Erro', 'Data de nascimento inválida.');
            return;
        }

        setLoading(true);

        const dataToSave = {
            name: name.trim(),
            gender,
            birthDate: birthDate.toISOString(),
            bloodType: bloodType || null,
        };

        const success = await saveDonorData(dataToSave);

        if (success) {
            Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
            navigation.navigate('Profile');
        } else {
            Alert.alert('Erro', 'Falha ao salvar os dados. Tente novamente.');
        }

        setLoading(false);
    }, [user, name, gender, birthDate, bloodType, saveDonorData, navigation]);

    const calculateAge = useCallback(() => {
        if (!birthDate) return '';
        
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const actualAge = monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
        
        return `${actualAge} anos`;
    }, [birthDate]);

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
            <Text style={styles.headerTitle}>Editar Meus Dados</Text>
            <Text style={styles.subtitle}>Atualize suas informações pessoais</Text>

            <Text style={styles.label}>Nome Completo *</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Digite seu nome completo"
                placeholderTextColor="#999"
                editable={!loading}
            />

            <Text style={styles.label}>Gênero *</Text>
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

            <Text style={styles.label}>Data de Nascimento *</Text>
            <TouchableOpacity
                style={styles.datePickerButton}
                onPress={() => setShowDatePicker(true)}
                disabled={loading}
            >
                <Text style={styles.datePickerText}>
                    {birthDate ? `${format(birthDate, 'dd/MM/yyyy')} (${calculateAge()})` : 'Selecione a Data'}
                </Text>
            </TouchableOpacity>

            <Text style={styles.label}>Tipo Sanguíneo</Text>
            <View style={styles.bloodTypeContainer}>
                {BLOOD_TYPES.map((type) => (
                    <TouchableOpacity
                        key={type}
                        style={[
                            styles.bloodTypeButton,
                            bloodType === type && styles.bloodTypeSelected
                        ]}
                        onPress={() => setBloodType(type)}
                        disabled={loading}
                    >
                        <Text style={[
                            styles.bloodTypeText,
                            bloodType === type && styles.bloodTypeTextSelected
                        ]}>
                            {type}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={[styles.input, { backgroundColor: '#EEE' }]}
                value={user.email}
                editable={false}
                placeholderTextColor="#999"
            />

            <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>💡 Informações Importantes</Text>
                <Text style={styles.infoText}>
                    • Nome e data de nascimento são obrigatórios{'\n'}
                    • Idade mínima para doação: 16 anos{'\n'}
                    • Tipo sanguíneo ajuda no cadastro de doação
                </Text>
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={birthDate || new Date('2000-01-01')}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    maximumDate={new Date()}
                    minimumDate={new Date('1900-01-01')}
                />
            )}

            <TouchableOpacity
                style={[styles.saveButton, loading && styles.saveButtonDisabled]}
                onPress={handleSave}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={styles.saveButtonText}>Salvar</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => navigation.navigate('Profile')}
                disabled={loading}
            >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}