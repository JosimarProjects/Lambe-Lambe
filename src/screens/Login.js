import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { connect} from 'react-redux';
import { login } from '../store/actions/user';


class Login extends Component {
    state = {
        name: 'temporario',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({...this.state})
        this.props.navigation.navigate('userProfile');
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

//export default Login
export default connect(null, mapDispatchToProps)(Login);