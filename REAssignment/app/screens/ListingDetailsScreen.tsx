import { RouteProp, ParamListBase } from "@react-navigation/native"
import { View, StyleSheet, Image, Text, ImageSourcePropType } from "react-native"
import AppText from "../components/AppText"
import { StackScreenProps } from "@react-navigation/stack"

import UserInfo from "../components/UserInfo"
import colors from "../config/colors"

interface Listing {
    id: number,
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
}

type StackParamList = {
    ListingDetailsScreen: {item: Listing}
}

type Props = StackScreenProps<StackParamList, "ListingDetailsScreen">;

function ListingDetailsScreen({ route }: Props) {
  const listing = route.params.item
  return (
    <View style={styles.container}>
        <Image source={listing.image} resizeMode="cover" style={styles.image} />
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.subTitle}>{listing.subTitle}</Text>
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
