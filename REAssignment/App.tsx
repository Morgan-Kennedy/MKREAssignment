import 'react-native-gesture-handler';
import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions, ImageBackground, Text, StyleProp, TextStyle } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RoundedButton from "./app/components/RoundedButton";
import ListingCard from "./app/components/ListingCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { createNativeStackNavigator,  } from "@react-navigation/native-stack"
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import FeedNavigator from "./app/navigation/FeedNavigator";

type RootStackParamList = {
  Tweet: undefined;
  TweetDetails: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
};

const Tweets = ({navigation}:{navigation: NavigationProp<RootStackParamList>}) => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails")} />
  </Screen>
)}

const TweetDetails = () => (
  <Screen>
    <Text>Tweets Details</Text>
  </Screen>
)

const Stack = createNativeStackNavigator()
const ListingsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="ListingsScreen" component={ListingsScreen} />
    <Stack.Screen name="ListingDetailsScreen" component={Tweets} />
  </Stack.Navigator>
)

interface HelloProps {
  who?: string
  children: string
  styles?: StyleProp<TextStyle>
}

const Hello = (props : HelloProps) => {
  return (<Text style={props.styles}>{props.children} Hello {props.who}</Text>)
}

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ListingCard title="Red jacket for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </SafeAreaView>
    // <ListingDetailsScreen title="Red jacket for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // <ListingsScreen />
    <NavigationContainer theme={NavigationTheme}>
      <FeedNavigator />
    </NavigationContainer>
    // <SafeAreaView>
    //   <Hello styles={{color: "red"}}>Hey</Hello>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f8f4f4",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
