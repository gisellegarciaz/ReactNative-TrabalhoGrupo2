import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Popable } from 'react-native-popable';

interface BadgeProps {
    imageSrc: any;
    label: string;
    donations: number;
    goal: number;
}

export const Badge = ({ imageSrc, label, goal, donations }: BadgeProps) => {

    function isUnlocked(total: number) {
        if (total >= goal) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <View style={styles.imageWrapper}>
            <Popable content={label} position={'bottom'} style={styles.popable}>
                <Image
                    source={imageSrc}
                    style={[
                        styles.image,
                        !isUnlocked(donations) && styles.imageLocked
                    ]}
                />
            </Popable>
        </View>

    );
};

export default Badge;