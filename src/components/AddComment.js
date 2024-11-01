import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableWithoutFeedback as TWF, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class AddComment extends Component {
    state = {
        comment: "",
        editMode: false
    }

    handleAddComment = () => {
        Alert.alert(
            'Adicionar comentário',
            this.state.comment,
        )
    }

    render() {
        let commentArea = null;
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput
                        placeholder="Adicionar comentário"
                        style={styles.input}
                        autoFocus={true}
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}                    
                    />
                    <TWF onPress={() => this.setState({ editMode: false })}>
                        <View>
                            <Icon name="times" size={15} color="red" />
                        </View>
                    </TWF>
                </View>
            );
        } else {
            commentArea = (
                <TWF onPress={() => this.setState({ editMode: true })}>
                    <View style={styles.container}>
                        <Icon name="comment-o" size={15} color="#999" style={styles.icon}/>
                        <Text style={styles.caption}>Adicionar comentário...</Text>
                    </View>
                </TWF>
            );
        }
        return (
            <View style={styles.container}>
                {commentArea}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    caption: {
        marginLeft: 10,  // Adicionar mais espaço entre o ícone e o texto
        fontSize: 20,  // Tamanho da fonte um pouco maior
        color: "black"
    },
    input: {
        width: "90%"
    },
    icon: {
        marginRight: 10,
        color: "black"
    }
});

export default AddComment;
