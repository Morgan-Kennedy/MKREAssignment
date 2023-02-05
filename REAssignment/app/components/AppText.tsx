import React from "react";
import { Text, StyleSheet, Platform, StyleProp } from 'react-native'

interface TextStyles {
  children: React.ReactNode,
  styles?: TextStyles
}

const appTextStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
        ios: {      
          fontFamily: "Avenir",
        },
        android: {
          fontFamily: "Roboto",
        }
    })
  }
})

const AppText = ({styles, children} : TextStyles) => {
  if (styles != undefined) {
    return (
      <Text style={appTextStyles.text}>{children}</Text>
    )
  } else {
    return (
      <Text style={[appTextStyles.text, styles]}>{children}</Text>
    )
  }
}

export default AppText
