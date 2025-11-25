import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthProvider, useAuth } from '../hooks/useAuth';
// CORREÇÃO: Voltamos à importação nomeada ({}) para Login, Home e Location
// e incluímos o SignUp aqui também para consistência.
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Location } from '../pages/Location';
import Intro from '../pages/Introducao';
import { TabRouters } from './tabRouters';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    },
});


function StackNavigator() {

    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#E74C3C" />
            </View>
        );
    }


    return (
        <Stack.Navigator >
            {isAuthenticated ? (

                <Stack.Screen name='StackHome' component={TabRouters} options={{ headerShown: false }}/>
            ) : (
                <>
                    <Stack.Screen name="Introducao" component={Intro} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
                </>
            )}
        </Stack.Navigator>
    );
}

export function StackRouters() {
    return (
        <StackNavigator />
    );
}