import React from "react";
import { Text, StyleSheet, Platform } from 'react-native'

function AppText({children} : { children: React.ReactNode }) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        ...Platform.select({
            ios: {
              fontSize: 20,
              fontFamily: "Avenir",
            },
            android: {
              fontSize: 18,
              fontFamily: "Roboto",
            }
          })
    }
})

export default AppText
