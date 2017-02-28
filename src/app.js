import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { Header } from './components/common'
import firebase from 'firebase'


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCSMAp6lNAKJZYs48hnigQsPwujZiy_lGQ',
      authDomain: 'auth-4fe13.firebaseapp.com',
      databaseURL: 'https://auth-4fe13.firebaseio.com',
      storageBucket: 'auth-4fe13.appspot.com',
      messagingSenderId: '437936581017'
    })
  }

  render() {
    return (
      <View>
        <Header headerText='Auth' />
      </View>
    )
  }
}

export default App