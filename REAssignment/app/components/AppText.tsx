import React from "react";
import { Text, StyleSheet, Platform, StyleProp } from 'react-native'

interface TextStyles {
  children: React.ReactNode,
  style?: TextStyles
}

function AppText({style, children} : {style?: TextStyles, children: React.ReactNode}) {
  if (style != undefined) {
    return (
      <Text style={styles.text}>{children}</Text>
    )
  } else {
    return (
      <Text style={[styles.text, style]}>{children}</Text>
    )
  }
}

const styles = StyleSheet.create({
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

export default AppText
