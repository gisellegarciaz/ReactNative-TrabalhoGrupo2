import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

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

const SignUp = () => {
    const navigation = useNavigation<any>();

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [bloodType, setBloodType] = useState<string | null>(null);
    const [sex, setSex] = useState<string | null>(null);

    const [isFocusBlood, setIsFocusBlood] = useState(false);
    const [isFocusSex, setIsFocusSex] = useState(false);

    const handleRegister = () => {
        if (!nome || !sobrenome || !email || !senha || !bloodType || !sex) {
            Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
            return;
        }
    }

    // Aqui chama a API

    //     console.log({
    //         nome, sobrenome, email, senha, bloodType, sex
    //     });

    //     Alert.alert('Sucesso', 'Cadastro realizado com sucesso!', [
    //         { text: 'OK', onPress: () => navigation.navigate('Login') }
    //     ]);
    // };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <Image
                source={require('../../assets/Logos/LogoDoeMais2.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            {/* <Text style={styles.appTitle}>NomeDoApp</Text> */}

            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={[styles.input, isFocusBlood && { borderColor: '#31C9EB' }]}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu sobrenome"
                placeholderTextColor="#999"
                value={sobrenome}
                onChangeText={setSobrenome}
            />

            <View style={styles.TipoGeneroWrapper}>
                <View style={styles.TipoGeneroContainer}>
                    <Text style={styles.label}>Tipo Sanguíneo</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusBlood && { borderColor: '#31C9EB' }]}
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
                    />

                </View>

                <View style={styles.TipoGeneroContainer}>
                    <Text style={styles.label}>Gênero Biológico</Text>
                    <Dropdown
                        style={[styles.dropdown, isFocusSex && { borderColor: '#31C9EB' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        data={sexData}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocusSex ? 'Selecione o sexo' : '...'}
                        value={sex}
                        onFocus={() => setIsFocusSex(true)}
                        onBlur={() => setIsFocusSex(false)}
                        onChange={item => {
                            setSex(item.value);
                            setIsFocusSex(false);
                        }}
                    />
                </View>
            </View>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export { SignUp };