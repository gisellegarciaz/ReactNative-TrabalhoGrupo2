import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';
import { Alert } from 'react-native';

const API_URL = 'https://691f65c231e684d7bfc99eb2.mockapi.io/users';


export interface Donor {
    id: string;
    name: string;
    email: string;
    token: string;
    gender: 'male' | 'female' | '';
    birthDate: string; 
    lastDonation?: string; 
    totalDonations?: number;
    password?: string; 
    bloodType?: string | null; 
}

export interface LoginCredentials {
    email: string;
    password?: string;
}

export interface DonorRegistrationData {
    name: string;
    email: string;
    password: string; 
    gender: 'male' | 'female' | '';
    birthDate: string; 
    bloodType?: string | null; 
}

interface AuthResponse {
    success: boolean;
    user: Donor | null;
}


const validateEmail = (email: string): boolean => {
    // Regex simples para verificar o formato básico de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const signIn = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    if (!validateEmail(credentials.email)) {
        Alert.alert('Erro de Login', 'O formato do e-mail é inválido.');
        return { success: false, user: null };
    }
    
    try {
        const response = await axios.get(`${API_URL}?email=${credentials.email}`);
        const users: Donor[] = response.data;

        const foundUser = users.find(donor => 
            donor.password === credentials.password
        );

        if (foundUser) {
            const token = 'mock-api-token-' + foundUser.id; 
            
            const { password, ...userWithoutPassword } = foundUser;
            
            const userLogged: Donor = { 
                ...userWithoutPassword, 
                token 
            };
            
            await AsyncStorage.setItem('@BloodCycle:token', token);
            await AsyncStorage.setItem('@BloodCycle:user', JSON.stringify(userLogged));
            
            return { success: true, user: userLogged };
        }

        Alert.alert('Erro de Login', 'E-mail ou senha incorretos.');
        return { success: false, user: null };

    } catch (error) {
        console.error("Erro ao tentar autenticar:", error);
        Alert.alert("Erro de Conexão", "Não foi possível conectar ao servidor MockAPI.");
        return { success: false, user: null };
    }
};


export const registerDonor = async (data: DonorRegistrationData): Promise<AuthResponse> => {
    if (!validateEmail(data.email)) {
        Alert.alert('Erro de Registro', 'O formato do e-mail é inválido.');
        return { success: false, user: null };
    }

    try {
      
        const checkResponse = await axios.get(`${API_URL}?email=${data.email}`);
        const existingUsers: Donor[] = checkResponse.data;

        if (existingUsers && existingUsers.length > 0) {
            Alert.alert('Erro', 'Este e-mail já está cadastrado.');
            return { success: false, user: null };
        }

       
        const payload = { 
            name: data.name,
            email: data.email,
            password: data.password,
            gender: data.gender,
            birthDate: data.birthDate,
            bloodType: data.bloodType || null, 
            lastDonation: '', 
            totalDonations: 0,
            token: 'mock-token-init',
        }; 

        const response = await axios.post(API_URL, payload);

        if (response.status === 201) {
            const newUser = response.data;
            const token = 'mock-api-token-' + newUser.id;

            const { password, ...userWithoutPassword } = newUser;

            const userLogged: Donor = { 
                ...userWithoutPassword, 
                token 
            };
            
            await AsyncStorage.setItem('@BloodCycle:token', token);
            await AsyncStorage.setItem('@BloodCycle:user', JSON.stringify(userLogged));

            return { success: true, user: userLogged };
        }
        
        return { success: false, user: null };

    } catch (error) {
        const status = (error instanceof AxiosError) ? error.response?.status : null;
        
        console.error("Erro no registro:", error);

        if (status === 404) {
             
             Alert.alert("Erro 404", "Não foi possível conectar ao recurso 'users'. Tente limpar o cache do seu projeto (`npm start -- --reset-cache`) ou verifique novamente o status do MockAPI.");
        } else if (status === 400) {
             Alert.alert("Erro 400", "Dados inválidos foram enviados. Verifique se todos os campos estão preenchidos.");
        } else {
             Alert.alert("Erro de Registro", `Não foi possível completar o cadastro. Detalhe: Erro de Rede: Status ${status || 'desconhecido'}`);
        }
        
        return { success: false, user: null };
    }
}

export const updateDonor = async (updatedUser: Donor): Promise<boolean> => {
    const { token, password, ...payload } = updatedUser; 

    try {
        const response = await axios.put(`${API_URL}/${updatedUser.id}`, payload);
        
        if (response.status === 200) {
             const { password, ...userUpdated } = response.data;
             await AsyncStorage.setItem('@BloodCycle:user', JSON.stringify(userUpdated));
             return true;
        }
        return false;
        
    } catch (error) {
        console.error("Erro ao atualizar doador:", error);
        Alert.alert("Erro de Atualização", "Não foi possível salvar as alterações.");
        return false;
    }
};


export const signOut = async (): Promise<void> => {
    await AsyncStorage.removeItem('@BloodCycle:token');
    await AsyncStorage.removeItem('@BloodCycle:user');
};


export const isAuthenticated = async (): Promise<boolean> => {
    const token = await AsyncStorage.getItem('@BloodCycle:token');
    return !!token;
};


export const getStoredUser = async (): Promise<Donor | null> => {
    const userJson = await AsyncStorage.getItem('@BloodCycle:user');
    if (userJson) {
        return JSON.parse(userJson) as Donor;
    }
    return null;
}