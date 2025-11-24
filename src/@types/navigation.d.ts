import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';


export type StackParamList = {
    StackLogin: undefined;
    StackHome: undefined;
};

export type TabParamList = {
    TabHome: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends StackParamList { }
        // OU: interface RootParamList extends TabParamList {}
    }
}

export type LoginScreenNavigationProp = StackNavigationProp<StackParamList, 'StackLogin'>;