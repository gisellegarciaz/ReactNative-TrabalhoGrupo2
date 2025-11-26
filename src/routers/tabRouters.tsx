import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Location } from "../pages/Location";
import CustomTabBar from "../components/CustomTabBar";
import ChecklistScreen from "../pages/Checklist";
import Compatibilidade from "../pages/Compatibilidade";
import Nutricao from "../pages/Nutricao";
import Curiosidade from "../pages/Curiosidades";
import NewDonation from "../pages/NewDonation";

const Tab = createBottomTabNavigator();

export const TabRouters = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }} tabBar={(props) => <CustomTabBar {...props} />}>

            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Location" component={Location} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Checklist" component={ChecklistScreen} />
            <Tab.Screen name="Compatibilidade" component={Compatibilidade}/>
            <Tab.Screen name="Nutricao" component={Nutricao} />
            <Tab.Screen name="Curiosidade" component={Curiosidade} />
            <Tab.Screen name="NewDonation" component={NewDonation} />

        </Tab.Navigator>
    )
}
