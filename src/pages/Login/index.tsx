import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView, Image } from 'react-native';
import { styles } from './style';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<any>();

    const { login } = useAuth();

    const handleLogin = async () => {
        if (!user || !password) {
            Alert.alert('Erro', 'Preencha usuário e senha.');
            return;
        }

        setLoading(true);


        const success = await login({ user, password });

        if (!success) {
            Alert.alert('Erro', 'Usuário ou senha inválidos. Tente novamente.');
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
                {/* <Text style={styles.title}>DoeMais</Text>
                <Text style={styles.subtitle}>Seu lembrete de doação</Text> */}
            </View>

            <View style={styles.card}>
                {/* <Text style={styles.cardTitle}>Acesse sua Conta</Text> */}

                <Text style={styles.cardLabel}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    value={user}
                    onChangeText={setUser}
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