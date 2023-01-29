import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Halo World</Text>
      <TouchableWithoutFeedback onPress={ () => console.log("touched the image")}>
        <Image source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300" 
          }} 
        />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
