import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Location } from "../pages/Location";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }} tabBar={(props) => <CustomTabBar {...props} />}>

            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}