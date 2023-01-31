import { Text, Pressable, ButtonProps, StyleSheet } from "react-native"

import colors from "../config/colors"

function RoundedButton(props: ButtonProps) {
  return (
    <Pressable style={[styles.button, {backgroundColor: props.color}]} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 32
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white
    },
})

export default RoundedButton