import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Gravatar } from 'react-native-gravatar';

class Profile extends Component {

    logout = () => {
        this.props.navigation.navigate("Login")

    }

    render() {
        const options = {
            email: 'fulano@.com',
            secure: true
        }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>fulano de tal</Text>
                <Text style={styles.email}>fulano@.com</Text>
                <TouchableOpacity onPress={this.logout} style={styles.button}>
                    <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
            </View>

        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 20
    },
    nickname: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: "bold"
    },
    email: {
        marginTop: 20,
        fontSize: 20
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#4286f4",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF"
    }
})

export default Profile
