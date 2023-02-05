import Constants from 'expo-constants'
import React from "react"
import { SafeAreaView, StyleSheet, ViewStyle, StyleProp } from "react-native"

function Screen(props : {children: React.ReactNode, styles?: StyleProp<ViewStyle>}) {
  return (
    <SafeAreaView style={[styles.screen, props.styles]}>
        {props.children}
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