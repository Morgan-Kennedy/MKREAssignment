import { Text, ButtonProps, StyleSheet, TouchableOpacity } from "react-native"

import colors from "../config/colors"

function RoundedButton(props: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.color}]} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 32
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: colors.white
    },
})

export default RoundedButton