import { View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native"

import UserInfo from "../components/UserInfo"
import colors from "../config/colors"

interface ListingDetailsScreenProps {
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
}

function ListingDetailsScreen(props: ListingDetailsScreenProps) {
  return (
    <View style={styles.container}>
        <Image source={props.image} resizeMode="cover" style={styles.image} />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
        <View style={styles.userInfoArea}>
            <UserInfo image={require("../assets/mosh.jpg")} title="Mosh Hamedani" subTitle="5 Listings" />
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
        fontSize: 24,
        fontWeight: "500"
    },
    subTitle: {
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 12,
        fontSize: 20,
        fontWeight: "600",
        color: colors.secondary
    },
    userInfoArea: {
        marginTop: 40,
    }
})

export default ListingDetailsScreen
