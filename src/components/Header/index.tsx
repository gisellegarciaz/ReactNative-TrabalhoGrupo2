import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './styles'
import { useAuth } from '@/src/hooks/useAuth';

type HeaderProps = {
    username: string
    logoff: () => void
}


const HeaderComponent: React.FC<HeaderProps> = ({ username, logoff }) => {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.leftContent}>
                <Image
                    source={require('../../assets/Mascote/MascoteComCapa.png')}
                    style={styles.logoImage}
                />
                <View style={styles.rightContent}>
                    <Text style={styles.greetingText1}>Olá, </Text>
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