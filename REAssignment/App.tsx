import { StyleSheet, View, SafeAreaView, Alert, Button, Platform, StatusBar, Dimensions } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation())

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
      >
        <View style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}/>
        <View style={{
          backgroundColor: "gold",
          flex: 1,
        }}/>
        <View style={{
          backgroundColor: "tomato",
          flex: 1,
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
