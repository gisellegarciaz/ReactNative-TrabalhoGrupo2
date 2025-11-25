import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView, Image } from 'react-native';
import { styles } from './style';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<any>();

    const { login } = useAuth();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Erro', 'Preencha e-mail e senha.');
            return;
        }

        setLoading(true);

        const success = await login({ email, password });

        if (!success) {
            Alert.alert('Erro', 'E-mail ou senha inválidos. Tente novamente.');
        } else {
            navigation.replace('StackHome');
        }

        setLoading(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.header}>
                <Image
                    source={require('../../assets/Logos/LogoDoeMais3.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.cardLabel}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    editable={!loading}
                />

                <Text style={styles.cardLabel}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    editable={!loading}
                />

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={handleLogin}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.loginButtonText}>Entrar</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Não possui login?</Text>
                    <TouchableOpacity onPress={() => { navigation.replace('SignUp') }}>
                        <Text style={styles.registerButtonText}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    );
}