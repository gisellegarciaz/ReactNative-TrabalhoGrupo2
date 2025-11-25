import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface CardHomeProps {
    imageSrc: ImageSourcePropType;
    title?: string;
    onPress: () => void;
}

export const CardHome = ({ imageSrc, title, onPress }: CardHomeProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.imageWrapper}>
                <Image
                    source={imageSrc}
                    style={styles.image}
                />
            </View>
            {title && <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
};