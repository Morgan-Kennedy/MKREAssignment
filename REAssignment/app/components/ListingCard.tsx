import { Image, StyleSheet, View, Text, ImageSourcePropType, GestureResponderEvent } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

import colors from "../config/colors"
import AppText from "./AppText"

interface ListingCardProps {
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
    onPress?: () => void
}

function ListingCard({title, subTitle, image, onPress}: ListingCardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={image} resizeMode="cover" style={styles.image} />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    card: {
        alignItems: "flex-start",
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: colors.white,
        width: "100%",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 16,
        fontWeight: "400"
    },
    subTitle: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 12,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.secondary
    }
})

export default ListingCard