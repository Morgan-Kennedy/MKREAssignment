import { Image, StyleSheet, View, Text } from "react-native"

import colors from "../config/colors"

interface ListingCardProps {
    title: string,
    subTitle: string,
    imageName: string
}

function ListingCard(props: ListingCardProps) {
  const image = require("../assets/jacket.jpg")

  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Image source={image} resizeMode="cover" style={styles.image} />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    card: {
        alignItems: "flex-start",
        borderRadius: 20,
        backgroundColor: colors.white,
        width: "100%",
    },
    image: {
        width: "100%",
        height: 180,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    title: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 14,
        fontWeight: "450"
    },
    subTitle: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 12,
        fontSize: 14,
        fontWeight: "600",
        color: colors.secondary
    }
})

export default ListingCard