import { createStackNavigator } from "@react-navigation/stack"
import ListingDetailsScreen from "../screens/ListingDetailsScreen"
import ListingsScreen from "../screens/ListingsScreen"

const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ListingDetailsScreen" component={ListingDetailsScreen} options={{title: "Details", headerShown: false, presentation: "modal"}} />
    </Stack.Navigator>
)

export default FeedNavigator
