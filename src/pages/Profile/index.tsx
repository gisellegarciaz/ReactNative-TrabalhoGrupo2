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
import HeaderComponent from '../../components/Header';
import { format } from 'date-fns';
import { styles } from './styles';
import { useAuth } from '@/src/hooks/useAuth';


type GenderType = 'male' | 'female' | '';

export function Profile() {

    const navigation = useNavigation();

    const { user, logout, saveDonorData } = useAuth();

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

    const calculateAge = () => {
        if (!user.birthDate) return 'Idade não informada';
        const today = new Date();
        const birthDate = new Date(user.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return `${age} anos`;
    };

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>

            <HeaderComponent username={user.name} logoff={handleLogout} />

            <Text style={styles.headerTitle}>{user.name}</Text>
            <Text style={styles.headerTitleLitle}>{calculateAge()}</Text>

            <Text style={styles.subtitle}>Nivel 2 - badge</Text>

            <Text style={styles.infoValue}>4</Text>
            <Text style={styles.infoLabel}>Doações</Text>
    
            <Text style={styles.infoValue}>{user.bloodType}</Text>
            <Text style={styles.infoLabel}>Tipo sanguíneo</Text>
          
            <Text style={styles.infoValue}>16</Text>
            <Text style={styles.infoLabel}>Vidas salvas</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Última Doação</Text>
                
                <View style={styles.donationCard}>
                    <View style={styles.donationInfo}>
                        <Text style={styles.donationDate}>Qui, 8 de maio</Text>
                        <View style={styles.hospitalTag}>
                            <Text style={styles.hospitalText}>Hospital</Text>
                        </View>
                    </View>
                </View>
            </View>


            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.saveButtonText}>Editar meus dados</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.donationButton}
                onPress={() => navigation.navigate('Profile')}
            >
                <Text style={styles.saveButtonText}>Cadastrar nova doação</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}