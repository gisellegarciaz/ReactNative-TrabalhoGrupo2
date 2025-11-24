import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles';
import IntroducaoApp from '../../components/Introducao/introducaoApp';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const Intro = () => {

    const navigation = useNavigation<any>();

    const handleFinishOnboarding = () => {
        // console.log('Onboarding finalizado! Navegando para a próxima tela...');
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Configura a barra de status para combinar com o design claro */}
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.container}>
                <IntroducaoApp onFinishIntro={handleFinishOnboarding} />
            </View>
        </SafeAreaView>
    );
};

export default Intro;