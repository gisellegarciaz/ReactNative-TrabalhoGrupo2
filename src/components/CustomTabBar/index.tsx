import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styles, PRIMARY_COLOR, INACTIVE_COLOR } from './styles';


const iconMap: { [key: string]: string } = {
    Home: 'water-outline', 
    Location: 'medkit-outline',
    TabHome2: 'add',
    TabHome3: 'person-outline',
    Profile: 'person-circle-outline',
    Checklist: 'checkmark-done-circle-outline',
    Compatibilidade: 'person-outline',
};

const labelMap: { [key: string]: string } = {
    Home: 'Home',
    Location: 'Hemocentros',
    TabHome2: '',
    TabHome3: 'Questionário',
    Profile: 'Perfil',
    Checklist: 'Checklist',
};


const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const isCentralButton = route.name === 'TabHome2';

                if(route.key.includes("Compatibilidade")){
                    return
                }
                if(route.key.includes("Nutricao")){
                    return
                }
                if(route.key.includes("Curiosidade")){
                    return
                }
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const color = isFocused ? PRIMARY_COLOR : INACTIVE_COLOR;
                const size = isFocused ? 32 : 26;
                const iconName = iconMap[route.name] || 'alert-circle-outline';
                const label = labelMap[route.name] || route.name;

                if (isCentralButton) {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            onPress={onPress}
                            style={styles.centralButtonWrapper}
                        >
                            <View style={styles.centralButton}>
                                <Ionicons name="add" size={40} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    );
                }

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={styles.tabItem}
                    >

                        <Ionicons
                            name={isFocused && route.name === 'TabHome' ? 'home' : (iconName as any)}
                            size={size}
                            color={color}
                        />
                        <Text style={[styles.tabText, { color }]}>
                            {labelMap[route.name]}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;