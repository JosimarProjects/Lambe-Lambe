import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Platform, ScrollView, Alert, PermissionsAndroid } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

class AddPhoto extends Component {
    state = {
        image: null,
        comment: ''
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Permissão para acessar a câmera',
                    message: 'O aplicativo precisa de acesso à câmera para tirar fotos.',
                    buttonNeutral: 'Perguntar depois',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'OK'
                }
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    }

    pickImageFromCamera = async () => {
        const hasPermission = await this.requestCameraPermission();
        if (!hasPermission) {
            Alert.alert('Permissão negada', 'Não foi possível acessar a câmera.');
            return;
        }

        launchCamera({
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800,
            saveToPhotos: true
        }, 
        (response) => {
            if (response.didCancel) {
                Alert.alert('Ação cancelada', 'Você cancelou a captura da foto.');
            } else if (response.errorCode) {
                Alert.alert('Erro', `Erro ao acessar a câmera: ${response.errorMessage}`);
            } else {
                this.setState({ image: { uri: response.assets[0].uri } });
            }
        });
    }

    pickImageFromGallery = () => {
        launchImageLibrary({
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800
        }, 
        (response) => {
            if (response.didCancel) {
                Alert.alert('Ação cancelada', 'Você cancelou a seleção da foto.');
            } else if (response.errorCode) {
                Alert.alert('Erro', `Erro ao acessar a galeria: ${response.errorMessage}`);
            } else {
                this.setState({ image: { uri: response.assets[0].uri } });
            }
        });
    }

    save = async () => {
        const { image, comment } = this.state;
        if (image) {
            Alert.alert('Foto salva com sucesso!', comment);
        } else {
            Alert.alert('Erro', 'Nenhuma foto selecionada.');
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Adicionar foto</Text>
                    <View style={styles.imageContainer}>
                        {this.state.image ? (
                            <Image source={this.state.image} style={styles.image} />
                        ) : (
                            <Text style={styles.placeholderText}>Nenhuma imagem selecionada</Text>
                        )}
                    </View>
                    <TouchableOpacity onPress={this.pickImageFromCamera} style={styles.button}>
                        <Text style={styles.buttonText}>Tirar foto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.pickImageFromGallery} style={styles.button}>
                        <Text style={styles.buttonText}>Importar da galeria</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder="Alguma legenda?"
                        value={this.state.comment}
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <TouchableOpacity onPress={this.save} style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === "ios" ? 30 : 10,
        fontWeight: "bold",
        textAlign: "center",
        color: "#444"
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get("window").width * 3 / 4,
        borderRadius: 10,
        backgroundColor: '#EEE',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover"
    },
    placeholderText: {
        color: '#AAA',
        fontSize: 16
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: "#4286f4",
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#FFF"
    },
    input: {
        marginTop: 20,
        width: "90%",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DDD",
        padding: 10
    }
});

export default AddPhoto;
