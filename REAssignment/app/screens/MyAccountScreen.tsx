import React from 'react'
import { FlatList, StyleSheet, View } from "react-native"

import Screen from "../components/Screen"
import colors from "../config/colors"

function MyAccountScreen() {
  return (
    <View style={styles.background}>
        <Screen>
            {/* <FlatList data/> */}
        </Screen>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.light
    }
})

export default MyAccountScreen