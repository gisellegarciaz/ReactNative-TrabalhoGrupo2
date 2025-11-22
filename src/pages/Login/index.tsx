import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView } from 'react-native';
import { styles } from './style';
import { useAuth } from '../../hooks/useAuth'; 

export function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
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
        } 
        
        setLoading(false);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>🩸 BloodCycle</Text>
                <Text style={styles.subtitle}>Seu lembrete de doação</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Acesse sua Conta</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Usuário (ex: meu.usuario)"
                    placeholderTextColor="#999"
                    value={user}
                    onChangeText={setUser}
                    autoCapitalize="none"
                    editable={!loading}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
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
                        <Text style={styles.loginButtonText}>ENTRAR</Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}