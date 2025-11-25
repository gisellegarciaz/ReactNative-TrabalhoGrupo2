import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform 
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native'; 
import { styles } from './styles'; 
import { useAuth } from '../../hooks/useAuth'; 


const bloodTypeData = [
    { label: 'A+', value: 'A+' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B-', value: 'B-' },
    { label: 'AB+', value: 'AB+' },
    { label: 'AB-', value: 'AB-' },
    { label: 'O+', value: 'O+' },
    { label: 'O-', value: 'O-' },
];

const sexData = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' }
];


const formatDate = (text: string) => {

    let cleanedText = text.replace(/\D/g, '');


    if (cleanedText.length > 2) {
        cleanedText = cleanedText.substring(0, 2) + '/' + cleanedText.substring(2);
    }
    if (cleanedText.length > 5) {
        cleanedText = cleanedText.substring(0, 5) + '/' + cleanedText.substring(5, 9); 
    }
    
    return cleanedText.substring(0, 10);
};

const validateAndConvertDate = (ddmmyyyy: string): string | null => {
    if (ddmmyyyy.length !== 10 || ddmmyyyy.charAt(2) !== '/' || ddmmyyyy.charAt(5) !== '/') {
        return null; 
    }
    
    const parts = ddmmyyyy.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    
    const testDate = new Date(isoDate);


    const dateCheck = new Date(Date.UTC(year, month - 1, day));
    
    
    if (dateCheck.getUTCFullYear() !== year || dateCheck.getUTCMonth() + 1 !== month || dateCheck.getUTCDate() !== day) {
        return null;
    }
    

    if (year < 1900 || year > new Date().getFullYear()) {
        return null;
    }

    return isoDate;
};


const SignUp = () => {
    const navigation = useNavigation<any>();
    const { register } = useAuth(); 

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [birthDate, setBirthDate] = useState(''); 
    
    const [bloodType, setBloodType] = useState<string | null>(null); 
    const [sex, setSex] = useState<string | null>(null); 
    const [loading, setLoading] = useState(false); 

    const [isFocusBlood, setIsFocusBlood] = useState(false);
    
    const handleRegister = async () => {
        if (!nome || !sobrenome || !email || !senha || !sex || !birthDate || !bloodType) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        const isoDate = validateAndConvertDate(birthDate);

        if (!isoDate) {
            Alert.alert('Atenção', 'A Data de Nascimento deve estar no formato DD/MM/AAAA e ser uma data válida.');
            return;
        }

        const mappedGender = sex === 'M' ? 'male' : (sex === 'F' ? 'female' : '');

        if (!mappedGender) {
            Alert.alert('Atenção', 'Selecione um gênero válido.');
            return;
        }
        
        setLoading(true);

        try {
            const success = await register({
                name: `${nome} ${sobrenome}`, 
                email,
                password: senha,
                gender: mappedGender,
                birthDate: isoDate, 
                bloodType: bloodType,
            });

            if (success) {
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso! Faça login para continuar.', [
                    { text: 'OK', onPress: () => navigation.replace('Login') }
                ]);
            } else {
                Alert.alert('Erro', 'O registro falhou. Verifique os dados e tente novamente.');
            }
        } catch (error: any) {
            console.log (error.response.data)
            let errorMessage = 'Um erro inesperado ocorreu durante o registro.';
            
            if (error.message && error.message.includes('404')) {
                errorMessage = 'Erro de conexão 404: Verifique a URL base do MockAPI. Ela pode ter expirado ou estar incorreta.';
            } else if (error.message) {
                 errorMessage = `Erro de Conexão: ${error.message}. Verifique sua rede.`;
            }

            console.error('Erro no registro:', error);
            Alert.alert('Erro no Registro', errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const GenderButton = ({ value, label }: { value: string, label: string }) => (
        <TouchableOpacity
            style={[
                styles.genderButton,
                sex === value ? styles.genderButtonActive : styles.genderButtonInactive
            ]}
            onPress={() => setSex(value)}
            disabled={loading}
        >
            <Text style={[
                styles.genderButtonText,
                sex === value ? styles.genderButtonTextActive : styles.genderButtonTextInactive
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    return (
        <KeyboardAvoidingView 
            style={{ flex: 1, backgroundColor: '#FFF8E7' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} 
        >
            <ScrollView 
                contentContainerStyle={styles.scrollContainer} 
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false} 
            >

                <Image
                    source={require('../../assets/Logos/LogoDoeMais2.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                    editable={!loading}
                />

                <Text style={styles.label}>Sobrenome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu sobrenome"
                    placeholderTextColor="#999"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    editable={!loading}
                />

                <Text style={styles.label}>Tipo Sanguíneo</Text>
                <Dropdown
                    style={[styles.dropdown, isFocusBlood && { borderColor: '#FE5F5F' }]} 
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={bloodTypeData}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocusBlood ? 'Selecione o tipo' : '...'}
                    value={bloodType}
                    onFocus={() => setIsFocusBlood(true)}
                    onBlur={() => setIsFocusBlood(false)}
                    onChange={item => {
                        setBloodType(item.value);
                        setIsFocusBlood(false);
                    }}
                    disable={loading}
                />
                

                <Text style={styles.label}>Gênero Biológico</Text>
                <View style={styles.genderContainer}>
                    {sexData.map((item) => (
                        <GenderButton key={item.value} value={item.value} label={item.label} />
                    ))}
                </View>


                <Text style={styles.label}>Data de Nascimento (DD/MM/AAAA)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 01/01/2000"
                    placeholderTextColor="#999"
                    keyboardType="numeric" 
                    maxLength={10} 
                    value={birthDate}
                    onChangeText={(text) => setBirthDate(formatDate(text))}
                    editable={!loading}
                />

                <Text style={styles.label}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    editable={!loading}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    editable={!loading}
                />

                <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
                    {loading ? (
                        <ActivityIndicator size="small" color="#FFF" />
                    ) : (
                        <Text style={styles.buttonText}>Registrar</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.loginLinkContainer}>
                    <Text style={styles.loginText}>Já tem uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text style={styles.loginButton}>Fazer Login</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export { SignUp };