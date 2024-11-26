import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Author from "./Author";
import Comments from "./Comments";
import AddComment from "./AddComment";
import { connect } from "react-redux";

class Post extends Component {
    render() {
        const addComment = this.props.name ? <AddComment postId={this.props.id} /> : null
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author nickname={this.props.nickname} email={this.props.email} />
                <Comments Comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").width * 3 / 4,
        resizeMode: "contain"
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
    }
}

export default connect(mapStateToProps)(Post)
//export default Post
