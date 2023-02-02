import { StyleSheet, ImageBackground, View, Pressable } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../config/colors";

function ViewImageScreen() {
    const image = require("../assets/chair.jpg")

    return (
      <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <View style={styles.horizontalView}>
          <Pressable>
            <MaterialCommunityIcons name="close" size={36} color={colors.white} />
          </Pressable>
          <Pressable>
            <MaterialCommunityIcons name="trash-can-outline" size={36} color={colors.white} />
          </Pressable>
        </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
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