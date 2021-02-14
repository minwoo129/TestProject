import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

export default class App extends Component {

  componentDidMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyCyeslFnoyPgJIAfkWj1LpgTx7XHaqMvHQ",
      authDomain: "testproject-a03f4.firebaseapp.com",
      projectId: "testproject-a03f4",
      storageBucket: "testproject-a03f4.appspot.com",
      messagingSenderId: "211938991718",
      appId: "1:211938991718:web:8dc0af2f0c0ea1c82dd7a7",
      measurementId: "G-ZV49C6ZBLH"
    });

    
  }

  start = () => {
    let docRef = firestore().doc('samples/sandwitchData1');
    docRef.set({
      name: 'rmw',
      address: 'seoul'
    }).then(function() {
      console.log('save Success');
    }).catch(function(e) {
      console.log('save Error: ', e);
    })
  }

  render() {
    return (
      <View>
          <TouchableOpacity onPress={() => this.start()}>
            <Text>실행</Text>
          </TouchableOpacity>
      </View>
    );
  }
  
}