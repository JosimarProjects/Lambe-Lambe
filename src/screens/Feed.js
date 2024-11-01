import React, { Component } from "react";
import Post from "../components/Post";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header";




class Feed extends Component {
    state = {
        posts: [
            {
                id: Math.random(),
                nickname: "fulano de tal",
                email: "a@a.com",
                image: require("../../assets/imgs/fence.jpg"),
                comments: [{
                    nickname: "beltrano de tal",
                    comment: "Legal"
                },
                {
                    nickname: "ciclano de tal",
                    comment: "Legal tal"
                }
                ]

            },
            {
                id: Math.random(),
                nickname: "fulano de tal",
                email: "a@a.com",
                image: require("../../assets/imgs/bw.jpg"),
                comments: [{
                    nickname: "beltrano de tal",
                    comment: "Legal"
                },
                {
                    nickname: "ciclano de tal",
                    comment: "Legal tal"
                }
                ]
            }
        ]

    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => { item => `${item.id}` }}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
})

export default Feed