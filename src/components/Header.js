import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from "react-native";
import { connect } from "react-redux";
import { Gravatar } from "react-native-gravatar";
import icon from "../../assets/imgs/icon.png";


class Header extends Component {
    render() {
        const name = this.props.name || "Anonymous"; // Evite desestruturar se 'name' for undefined
        const gravatar = this.props.email 
            ? <Gravatar options={{ email: this.props.email, secure: true }} style={styles.avatar} /> 
            : null;

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.name}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
    },
    image: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    title: {
        color: "#000",
        fontFamily: "shelter", // Verifique se o nome é o correto
        height: 30,
        fontSize: 28,
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    name: {
        fontFamily: "shelter", // Verifique se o nome é o correto
        color: "#000",
        fontSize: 20,
    },
});

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email,
    };
};

export default connect(mapStateToProps)(Header);

//export default Header