import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouters } from './src/routers/stackRouters';
import Introducao from './src/pages/Introducao';
import { AuthProvider } from './src/hooks/useAuth';
import { Routers } from './src/routers';

export default function App() {
  return (

      <AuthProvider>
        <Routers/>
      </AuthProvider>
  );
}