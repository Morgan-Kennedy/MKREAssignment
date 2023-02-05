import { FlatList, StyleSheet, View, ImageSourcePropType } from "react-native"
import React, { useState } from "react"
import { NavigationProp } from "@react-navigation/native";

import colors from "../config/colors"
import Screen from "../components/Screen"
import ListingCard from "../components/ListingCard"
import listings, { Listing } from "../data/ListingData";

type StackParamList = { 
    ListingDetailsScreen: {item: Listing}
};

const initialListings = listings

function ListingsScreen({navigation}:{navigation: NavigationProp<StackParamList>}) {
  const [listings, setListings] = useState(initialListings)
  const [refreshing, setRefreshing] = useState(false)

  return (
    <Screen styles={styles.background}>
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()} 
            renderItem={({ item }) =>
                <ListingCard title={item.address.street} subTitle={item.beds + " beds, " + item.bathrooms + " bathrooms, " + item.carSpaces + " car spaces"} image={item.imageURL} onPress={() => navigation.navigate("ListingDetailsScreen", {item})} />
            }
            refreshing={refreshing}
            onRefresh={() => setListings(initialListings)} 
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.light
    }
})

export default ListingsScreen