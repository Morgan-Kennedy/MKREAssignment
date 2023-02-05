import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import MyAccountScreen from "../screens/MyAccountScreen"
import FeedNavigator from "./FeedNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} options={{headerShown: false}}/>
        <Tab.Screen name="Account" component={MyAccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator