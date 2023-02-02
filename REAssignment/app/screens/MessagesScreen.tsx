import { FlatList, StyleSheet, ImageSourcePropType } from "react-native"
import React, { useState } from "react"

import UserInfo from "../components/UserInfo"
import Screen from "../components/Screen"
import ListSeparator from "../components/ListSeparator"
import ListDeleteAction from "../components/ListDeleteAction"

interface Message {
  id: number
  title: string
  description: string
  image: ImageSourcePropType
}

const initialMessages: Message[] = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/mosh.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/mosh.jpg"),
    },
]

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message: Message) => {
    // Delete the message from messages
    console.log("deleting")
    setMessages(messages.filter(m => m.id !== message.id))
  }

  return (
    <Screen>
       <FlatList 
          data={messages} 
          keyExtractor={message => message.id.toString()} 
          renderItem={({ item }) => <UserInfo 
              title={item.title} 
              subTitle={item.description} 
              image={item.image} 
              onPress={() => console.log("press")} 
              renderRightActions={() => <ListDeleteAction 
                onPress={() => handleDelete(item)} />}/>} 
          ItemSeparatorComponent={ListSeparator} 
          refreshing={refreshing}
          onRefresh={() => setMessages([{
            id: 2,
            title: "T2",
            description: "D2",
            image: require("../assets/mosh.jpg"),
        }])}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
})

export default MessagesScreen