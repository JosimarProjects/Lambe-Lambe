import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";


class Register extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Nome"
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>Registrar</Text>
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
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4"
    },
    buttonText: {        
        color: "#FFF",
        fontSize: 20
    }

});

export default Register