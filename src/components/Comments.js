import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Comments extends Component {
    render() {
        let commentViews = null;
        if (this.props.Comments) {
            commentViews = this.props.Comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}> {item.nickname}</Text>
                        <Text style={styles.comment}> {item.comment}</Text>
                    </View>
                );
            });
        }

        return (
            <View style={styles.container}>
                {commentViews}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: "#CCC",
        paddingTop: 5,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 5,
    },
    nickname: {
        marginLeft: 5,
        fontWeight: "bold",
        color: "#444",
    },
    comment: {
        color: '#555',
    },
});

export default Comments;
