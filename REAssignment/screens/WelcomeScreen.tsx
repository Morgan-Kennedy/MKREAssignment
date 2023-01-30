import { StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

function WelcomeScreen() {
  const image = require("../assets/background.jpg");
  const icon = require("../assets/logo-red.png");

  const screenWidth = useDimensions().screen.width;
  const buttonHeight = 64;
  const topPaddding =  64

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{
        flex: 1,
        justifyContent: "flex-end",  // Main
        alignItems: "center", // Seconday
      }}
      >
        <View style={{
          top: topPaddding,
          alignItems: "center"
        }}>
          <Image source={icon} style={{
            width: 100,
            height: 100,
            alignContent: "flex-start"
          }} />
          <Text>Sell What You Don't Need</Text>
        </View>
        <View style={{
          flex: 1
        }}/>
        <View style={{
          backgroundColor: "#fc5c65",
          width: screenWidth,
          height: buttonHeight,
        }}/>
        <View style={{
          backgroundColor: "#4ECDC4",
          width: screenWidth,
          height: buttonHeight,
        }}/>
      </View>
      </ImageBackground>
      
    </View>
  )
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

export default WelcomeScreen