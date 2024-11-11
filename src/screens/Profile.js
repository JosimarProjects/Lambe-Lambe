import React, { Component } from "react";
import { connect } from "react-redux";
import {logout} from '../store/actions/user';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Gravatar } from 'react-native-gravatar';

class Profile extends Component {

    logout = () => {
        this.props.onLogout();
        this.props.navigation.navigate("Login")

    }

    render() {
        const options = {
            email: this.props.email,
            secure: true
        }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
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

const mapStateToProps = ({ user }) => {
    return {
        name: user.name,
        email: user.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

//export default Profile
