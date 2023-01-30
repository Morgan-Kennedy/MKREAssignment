import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions, ImageBackground } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
