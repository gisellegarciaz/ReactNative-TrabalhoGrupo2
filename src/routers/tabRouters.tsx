import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Location } from "../pages/Location";
import CustomTabBar from "../components/CustomTabBar";
import ChecklistScreen from "../pages/Checklist";
import Compatibilidade from "../pages/Compatibilidade";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }} tabBar={(props) => <CustomTabBar {...props} />}>

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Checklist" component={ChecklistScreen} />
            <Tab.Screen name="Compatibilidade" component={Compatibilidade}/>

        </Tab.Navigator>
    )
}
