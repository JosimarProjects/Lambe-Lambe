import React from 'react';
import {
  SafeAreaView,

} from 'react-native';

import Header from './src/components/Header';
import { View, StyleSheet } from 'react-native';
import Post from './src/components/Post';


export default class App extends React.Component {

  render() {
    const comments = [
      {
        nickname: 'fulano de tal',
        comment: 'Legal'
      },
      {
        nickname: 'ciclano de tal',
        comment: 'Legal de novo'

      },
      {
        nickname: 'beltrano de tal',
        comment: 'Legal'

      }
    ];

    return (
      <View style={styles.container}>
        <Header />
        <Post Image={require('./assets/imgs/fence.jpg')} style={styles.image} comments={comments} />
      </View>

    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});



