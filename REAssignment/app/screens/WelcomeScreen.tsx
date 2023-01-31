import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';

import colors from "../config/colors";

function WelcomeScreen() {
  const image = require("../assets/background.jpg")
  const icon = require("../assets/logo-red.png")

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.iconArea}>
        <Image source={icon} style={styles.icon} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, { backgroundColor: colors.primary }]}/>
      <View style={[styles.button, { backgroundColor: colors.secondary }]}/>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  iconArea: {
    top: 70,
    alignItems: "center",
    position: "absolute",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
  },
  button: {
    width: "100%",
    height: 70,
  },
  spacer: {
    flex: 1
  }
});

export default WelcomeScreen