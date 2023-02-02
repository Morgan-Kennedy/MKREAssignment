import { StyleSheet, View, Image, ImageSourcePropType, Text, TouchableHighlight, GestureResponderEvent } from "react-native"
import { Swipeable } from "react-native-gesture-handler"

import colors from "../config/colors"

interface UserInfoProps {
    image: ImageSourcePropType,
    title: string,
    subTitle: string,
    onPress?: ((event: GestureResponderEvent) => void) | undefined,
    renderRightActions?: () => React.ReactNode
}

function UserInfo({image, title, subTitle, onPress, renderRightActions} : UserInfoProps) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
            <View style={styles.userInfoArea}>
                <Image source={image} resizeMode="cover" style={styles.image} />     
                <View style={styles.userTextArea}>
                    <Text style={styles.userInfoText}></Text>
                    <Text style={styles.userInfoText}>{title}</Text>
                    <Text style={[styles.userInfoText, {color: colors.medium}]}>{subTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    userInfoArea: {
        marginTop: 4,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "flex-start",
        paddingHorizontal: 16
    },
    userInfoText: {
        fontSize: 16,
        fontWeight: "500",
    },
    userTextArea: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 8,
    },
})

export default UserInfo