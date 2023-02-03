import { FlatList, StyleSheet, View, ImageSourcePropType } from "react-native"
import React, { useState } from "react"

import colors from "../config/colors"
import Screen from "../components/Screen"
import ListingCard from "../components/ListingCard"

interface Listing {
    id: number,
    title: string,
    subTitle: string,
    image: ImageSourcePropType,
}

const initialListings: Listing[] = [
    {
        id: 1,
        title: "Red jacket for sale",
        subTitle: "$100",
        image: require("../assets/jacket.jpg"),
    },
    {
        id: 1,
        title: "Couch in great condition",
        subTitle: "$1000",
        image: require("../assets/couch.jpg"),
    },
]

function ListingsScreen() {
  const [listings, setListings] = useState(initialListings)
  const [refreshing, setRefreshing] = useState(false)

  return (
    <View style={styles.background}>
        <Screen>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()} 
                renderItem={({ item }) =>
                    <ListingCard title={item.title} subTitle={item.subTitle} image={item.image} />
                }
                refreshing={refreshing}
                onRefresh={() => setListings(initialListings)} 
            />
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

export default ListingsScreen