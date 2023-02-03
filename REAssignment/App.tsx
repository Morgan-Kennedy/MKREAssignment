import 'react-native-gesture-handler';
import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RoundedButton from "./app/components/RoundedButton";
import ListingCard from "./app/components/ListingCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <ListingCard title="Red jacket for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    // </SafeAreaView>
    // <ListingDetailsScreen title="Red jacket for sale!" subTitle="$100" image={require("./app/assets/jacket.jpg")} />
    <ListingsScreen />
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
