import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Auth from '../services/auth';
import { LoginCredentials, Donor } from '../services/auth';

// --- Tipagens ---

interface AuthContextData {
    user: Donor | null;
    isAuthenticated: boolean;
    loading: boolean;
    login(credentials: LoginCredentials): Promise<boolean>;
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