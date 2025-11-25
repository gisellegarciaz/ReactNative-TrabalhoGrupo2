import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Auth from '../services/auth';
import { LoginCredentials, Donor, DonorRegistrationData } from '../services/auth'; // Usando as tipagens de Email

// --- Tipagens ---

interface AuthContextData {
    user: Donor | null;
    isAuthenticated: boolean;
    loading: boolean;
    login(credentials: LoginCredentials): Promise<boolean>;
    register(data: DonorRegistrationData): Promise<boolean>;
    logout(): Promise<void>;
    saveDonorData(data: Partial<Donor>): Promise<boolean>;
}

interface AuthProviderProps {
    children: ReactNode;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<Donor | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadStorageData = async () => {
            try {
                const [storageUser, storageToken] = await Promise.all([
                    AsyncStorage.getItem('@BloodCycle:user'),
                    AsyncStorage.getItem('@BloodCycle:token'),
                ]);

                if (storageUser && storageToken) {
                    const parsedUser: Donor = JSON.parse(storageUser);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error("Erro ao carregar dados do storage:", error);
            } finally {
                setLoading(false);
            }
        };

        loadStorageData();
    }, []);


    const login = async (credentials: LoginCredentials): Promise<boolean> => {
        try {
            // credentials agora é { email: string, password: string }
            const response = await Auth.signIn(credentials); 

            if (response.success && response.user) {
                setUser(response.user);
                await AsyncStorage.setItem('@BloodCycle:user', JSON.stringify(response.user));
                return true;
            }
            return false;
        } catch (error) {
            console.error("Falha no login:", error);
            return false;
        }
    };

    const register = async (data: DonorRegistrationData): Promise<boolean> => {
        try {
            // data agora é { name, email, password, gender, birthDate }
            const response = await Auth.registerDonor(data);

            if (response.success) {
                return true; 
            }
            return false;
        } catch (error) {
            console.error("Falha ao registrar:", error);
            return false;
        }
    };


    const logout = async (): Promise<void> => {
        await Auth.signOut();
        setUser(null);
    };

    const saveDonorData = async (data: Partial<Donor>): Promise<boolean> => {
        if (!user) return false;

        try {
            const updatedUser: Donor = { ...user, ...data };
            const success = await Auth.updateDonor(updatedUser);

            if (success) {
                setUser(updatedUser);
                await AsyncStorage.setItem('@BloodCycle:user', JSON.stringify(updatedUser));
                return true;
            }
            return false;
        } catch (error) {
            console.error("Falha ao salvar dados do doador:", error);
            return false;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: !!user,
                loading,
                login,
                register,
                logout,
                saveDonorData
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }

    return context;
};