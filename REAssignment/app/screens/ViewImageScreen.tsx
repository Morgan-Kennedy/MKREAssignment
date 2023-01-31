import { StyleSheet, SafeAreaView, ImageBackground, View, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

import colors from "../config/colors";

function ViewImageScreen() {
    const image = require("../assets/chair.jpg")
    const buttonHeight = 50

    return (
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <View style={styles.horizontalView}>
            <View style={[styles.button, { backgroundColor: colors.primary }]}/>
            <View style={[styles.button, { backgroundColor: colors.secondary }]}/>
          </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    button: {
      width: 50,
      height: 50,
    },
    image: {
      flex: 1,
      backgroundColor: colors.black,
    },
    horizontalView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 40,
    },
  });

export default ViewImageScreen