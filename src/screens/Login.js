import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        this.props.navigation.navigate('Profile');
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="email" style={styles.input} autoFocus={true} keyboardType="email-address" value={this.state.email} onChangeText={email => this.setState({ email })} />
                <TextInput placeholder="password" style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('Register');
                 }} style={styles.button}>
                    <Text style={styles.buttonText}>Criar nova conta ...</Text>
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
    input: {
        marginTop: 20,
        width: "90%",
        height: 40,
        backgroundColor: "#EEE",
        borderColor: "#333",
        borderWidth: 1,
        padding: 10
    },
    button: {
        marginTop: 10,
        backgroundColor: "#4286f4",
        padding: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20
    }

});

export default Login