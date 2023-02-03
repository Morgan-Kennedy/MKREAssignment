import Constants from 'expo-constants'
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"

function Screen({children} : {children: React.ReactNode}) {
  return (
    <SafeAreaView style={styles.screen}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    }
})

export default Screen