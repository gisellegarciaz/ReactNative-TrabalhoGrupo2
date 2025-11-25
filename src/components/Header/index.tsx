import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './styles'
import { useAuth } from '@/src/hooks/useAuth';
import { useFonts } from 'expo-font';

type HeaderProps = {
    username: string
    logoff: () => void
}


const HeaderComponent: React.FC<HeaderProps> = ({ username, logoff }) => {

    const [fontsLoaded] = useFonts({
        'NeulisRegular': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Regular.otf'),
        'NeulisSemiBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Semi_Bold.otf'),
        'NeulisBold': require('../../assets/Fonts/fonnts.com-Neulis_Cursive_Bold.otf'),
    });  

    return (
        <View style={styles.headerContainer}>

            <View style={styles.leftContent}>
                <Image
                    source={require('../../assets/Mascote/MascoteComCapa.png')}
                    style={styles.logoImage}
                />
                <View style={styles.rightContent}>
                    <Text style={styles.greetingText1}>Olá,</Text>
                    <Text style={styles.greetingText2}>{username}!</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={logoff} //Foi só tirar a arrow function (() =>) de antes da função
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>


        </View>
    );
};

export default HeaderComponent;