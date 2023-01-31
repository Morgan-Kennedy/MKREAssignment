import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import RoundedButton from "./app/components/RoundedButton";

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   <RoundedButton title="LOGIN" color={"blue"} />
    // </SafeAreaView>
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
