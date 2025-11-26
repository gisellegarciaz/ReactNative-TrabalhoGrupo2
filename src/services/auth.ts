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

export interface Donation {
  date: string;
  location: string;
}

export interface DonationResponse {
  success: boolean;
  error?: string;
}

export interface DonationsListResponse {
  success: boolean;
  donations?: Donation[];
  error?: string;
}

interface AuthResponse {
    success: boolean;
    user: Donor | null;
}

export const registerDonation = async (donationData: Donation & { userId: string }): Promise<DonationResponse> => {
  try {
    console.log('Registrando doação para usuário:', donationData.userId);

    const userResponse = await axios.get(`${API_URL}/${donationData.userId}`);
    const currentUser = userResponse.data;

    const currentTotal = currentUser.totalDonations || 0;
    const newTotal = currentTotal + 1;

    const updatedUser = {
      ...currentUser,
      totalDonations: newTotal,
      lastDonation: donationData.date,
    };

    delete updatedUser.token;
    delete updatedUser.password;

    console.log('Atualizando usuário:', {
      totalDonations: newTotal,
      lastDonation: donationData.date
    });

    const response = await axios.put(`${API_URL}/${donationData.userId}`, updatedUser);

    console.log('Doação registrada com sucesso! Total:', newTotal);

    if (response.status === 200) {
      return { success: true };
    }
    
    return { success: false, error: `Status ${response.status}` };
    
  } catch (error) {
    console.error('Erro ao registrar doação:', error);
    
    if (axios.isAxiosError(error)) {
      console.error('Detalhes do erro:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
    }
    
    Alert.alert("Erro", "Não foi possível registrar a doação.");
    return { success: false, error: 'Erro de conexão' };
  }
};

export const getUserDonations = async (userId: string): Promise<DonationsListResponse> => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);
    
    if (response.status === 200) {
      const userData = response.data;
      
      const donations = userData.lastDonation ? [{
        date: userData.lastDonation,
        location: 'Registrada no sistema' 
      }] : [];
      
      console.log('Informações de doação encontradas');
      return { success: true, donations };
    }
    return { success: false, error: 'Falha ao buscar informações' };
  } catch (error) {
    console.error('Erro ao buscar doações:', error);
    return { success: false, error: 'Erro de conexão' };
  }
};

export const calculateLivesSaved = (donationCount: number): number => {
  return donationCount * 4;
};

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
            console.log ("linha 89")
    if (!validateEmail(data.email)) {
        Alert.alert('Erro de Registro', 'O formato do e-mail é inválido.');
        return { success: false, user: null };
    }

            console.log ("linha 93")

    try {
      
        //const checkResponse = await axios.get(`${API_URL}?email=${data.email}`);
        //const existingUsers: Donor[] = checkResponse.data;
        console.log ("linha 98")

        // if (existingUsers && existingUsers.length > 0) {
        //     Alert.alert('Erro', 'Este e-mail já está cadastrado.');
        //     return { success: false, user: null };
        // }
        console.log ("linha 104")
       
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
                console.log ("linha 117")

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