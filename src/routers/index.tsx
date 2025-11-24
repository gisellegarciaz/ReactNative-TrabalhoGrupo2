import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthProvider, useAuth } from '../hooks/useAuth'; 
import { Login } from '../pages/Login';
import { Home } from '../pages/Home'; 
import { Profile } from '../pages/Profile'; 
import { Location } from '../pages/Location'; 

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
});


function AppNavigator() {

    const { isAuthenticated, loading } = useAuth();


    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
            </View>
        );
    }


    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: '#E74C3C' },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
            }}
        >
            {isAuthenticated ? (
          
                <>
                    <Stack.Screen name="Home" component={Home} options={{ title: 'Seu Lembrete de Doação' }} />
                    <Stack.Screen name="Profile" component={Profile} options={{ title: 'Meus Dados de Doador' }} /> 
                    <Stack.Screen name="Location" component={Location} options={{ title: 'Hemocentros Próximos' }} />
                </>
            ) : (
                        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            )}
        </Stack.Navigator>
    );
}

export function AppRouters() {
    return (
        <NavigationContainer>
      
            <AuthProvider>
                <AppNavigator />
            </AuthProvider>
        </NavigationContainer>

    )
};
