import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';

import AppText from "../components/AppText";
import RoundedButton from "../components/RoundedButton";
import colors from "../config/colors";

function WelcomeScreen() {
  const image = require("../assets/background.jpg")
  const icon = require("../assets/logo-red.png")

  return (
    <ImageBackground blurRadius={10} source={image} resizeMode="cover" style={styles.backgroundImage}>
      <View style={styles.iconArea}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonArea}>
        <RoundedButton title="LOGIN" color={colors.primary} />
      </View>
      <View style={[styles.buttonArea, {paddingBottom: 40}]}>
        <RoundedButton title="REGISTER" color={colors.secondary} />
      </View>
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
  buttonArea: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  spacer: {
    flex: 1
  },
  text: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "600"
  }
});

export default WelcomeScreen