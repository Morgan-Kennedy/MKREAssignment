import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RoundedButton from "./app/components/RoundedButton";
import ListingCard from "./app/components/ListingCard";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingCard title="Red jacket for sale!" subTitle="$100" imageName="jacket.jpg" />
    </SafeAreaView>
    // <WelcomeScreen />
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
