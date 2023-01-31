import { View, StyleSheet, Image, Text } from "react-native"

import colors from "../config/colors"

interface ListingDetailsScreenProps {
    title: string,
    subTitle: string,
    imageName: string,
}

function ListingDetailsScreen(props: ListingDetailsScreenProps) {
  const image = require("../assets/jacket.jpg")
  const avatar = require("../assets/mosh.jpg")

  return (
    <View style={styles.container}>
        <Image source={image} resizeMode="cover" style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
        <View style={styles.userInfoArea}>
            <Image source={avatar} resizeMode="cover" style={styles.avatar} />     
            <View style={styles.userTextArea}>
                <Text style={styles.infoText}>Mosh Hamedani</Text>
                <Text style={[styles.infoText, {color: colors.grey}]}>5 Listings</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        backgroundColor: colors.white,
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        marginTop: 16,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 20,
        fontWeight: "500"
    },
    subTitle: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 12,
        fontSize: 18,
        fontWeight: "600",
        color: colors.secondary
    },
    userInfoArea: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 32,
        paddingHorizontal: 16
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 64
    },
    userTextArea: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 8,
    },
    infoText: {
        fontSize: 16,
        fontWeight: "400",
    }
})

export default ListingDetailsScreen
