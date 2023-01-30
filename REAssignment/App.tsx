import { StyleSheet, Text, TouchableWithoutFeedback, Image, SafeAreaView, Alert, Button, Platform, StatusBar } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Click Me" 
      onPress={() => Alert.prompt("My title", "My Message", (text) => console.log(text))} />
      {/* <Button title="Click Me" 
      onPress={() => Alert.alert("My title", "My message", [{text: "Yes", onPress: () => console.log("Yes")}, {text: "No", onPress: () => console.log("No")}])} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
