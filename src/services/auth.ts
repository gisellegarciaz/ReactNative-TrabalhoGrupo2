import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_URL = 'https://691f65c231e684d7bfc99eb2.mockapi.io/users';

export interface Donor {
    id: string;
    name: string;
    user: string; 
    token: string;
    gender: 'male' | 'female' | '';
    birthDate: string; 
    lastDonation?: string; 
    totalDonations?: number;
    username?: string; 
    password?: string; 
}

export interface LoginCredentials {
    user: string;
    password?: string;
}

interface SignInResponse {
    success: boolean;
    user: Donor | null;
}


export const signIn = async (credentials: LoginCredentials): Promise<SignInResponse> => {
    
    try {

        const response = await axios.get(API_URL);
        const users: Donor[] = response.data;


        const foundUser = users.find(user => 
            user.username === credentials.user && 
            user.password === credentials.password
        );

        if (foundUser) {

            const token = 'mock-api-token-' + foundUser.id; 
            await AsyncStorage.setItem('@BloodCycle:token', token);
            
            const userLogged: Donor = { 
                ...foundUser, 
                user: foundUser.username || foundUser.user, 
                token 
            };
            

            delete userLogged.password;
            
            return { success: true, user: userLogged };
        }


        return { success: false, user: null };

    } catch (error) {

        console.error("Erro ao tentar autenticar com MockAPI:", error);
        return { success: false, user: null };
    }
};

export const updateDonor = async (updatedUser: Donor): Promise<boolean> => {

    try {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        return true; 
    } catch (error) {
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