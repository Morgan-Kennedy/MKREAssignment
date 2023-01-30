import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation())

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // horizontal axis = Main primary
        justifyContent: "center",  // Main
        alignItems: "center", // Seconday
      }}
      >
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          alignSelf: "flex-start"
        }}/>
        <View style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}/>
        <View style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}/>
      </View>
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
