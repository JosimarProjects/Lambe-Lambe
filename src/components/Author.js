import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gravatar } from 'react-native-gravatar';


export default props => {

    return (

        <View style={styles.container}>
            <Gravatar  options={{
                email: props.email,
                secure: true
            }} style={styles.avatar} />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 10
    },
    nickname: {
        marginLeft: 10,
        fontSize: 15,
        color: "#444",
        fontWeight: "bold"
    }
})