import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles';
import IntroducaoApp from '../../components/Introducao/introducaoApp';
import { useNavigation } from '@react-navigation/native';


const Intro = () => {

    const navigation = useNavigation<any>();

    const handleFinishOnboarding = () => {
       
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.container}>
                <IntroducaoApp onFinishIntro={handleFinishOnboarding} />
            </View>
        </SafeAreaView>
    );
};

export default Intro;