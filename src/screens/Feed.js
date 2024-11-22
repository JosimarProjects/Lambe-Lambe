import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../components/Post";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../components/Header";

class Feed extends Component {
 

    render() {
        // Obtém os posts das props passadas pelo Redux
        const { posts } = this.props;

        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.props.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post {...item} />}
                />
            </View>
        );
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


/*const mapStateToProps = state => {
    return {
        posts: state.posts.posts // Corrigindo para acessar corretamente o array
    };
};*/

const mapStateToProps = ({posts}) => {
    return {
        posts: posts.posts // Corrigindo para acessar corretamente o array  
    };
}

export default connect(mapStateToProps)(Feed);
