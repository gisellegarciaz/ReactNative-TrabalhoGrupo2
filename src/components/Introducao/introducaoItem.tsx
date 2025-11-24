import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { IntroducaoItemProps } from './types';
import { itemStyles } from './styles';
import { useNavigation } from '@react-navigation/native';

const IntroducaoItem: React.FC<IntroducaoItemProps> = ({
    id,
    title,
    description,
    image,
    buttonText,
    onNext,
    isLast
}) => {


    const navigation = useNavigation<any>();
    
    const showButton = id === 0 || isLast;

    const showSkip = id === 0; 

    return (
        <View style={itemStyles.container}>
            <View>
                {showSkip && (
                <TouchableOpacity 
                    style={itemStyles.skipButton}
                    onPress={() => navigation.replace('Login')}
                >
                    <Text style={itemStyles.skipText}>Pular</Text>
                </TouchableOpacity>)}
            </View>
            <View>
                <Text style={itemStyles.title}>{title}</Text>
                <Text style={itemStyles.description}>{description}</Text>
            </View>

            <Image source={image} style={itemStyles.image} resizeMode="contain" />
            
            {showButton ? (
                <TouchableOpacity
                    style={[itemStyles.button, id === 0 && itemStyles.initialButton]}
                    onPress={() => onNext(id)}
                >
                    <Text style={itemStyles.buttonText}>{buttonText}</Text>
                </TouchableOpacity>
            ) : (
                <View style={itemStyles.swipeContainer}>
                    <Text style={itemStyles.swipeText}> Deslize para o lado ➔ </Text>
                </View>
            )}

        </View>
    );
};

export default IntroducaoItem;

function useNavigate<T>() {
    throw new Error('Function not implemented.');
}
