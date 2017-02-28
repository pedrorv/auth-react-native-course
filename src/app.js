import React, { Component } from 'react'
import { View } from 'react-native'

import { Header, Button, Spinner, Card, CardSection } from './components/common'
import LoginForm from './components/LoginForm'
import firebase from 'firebase'


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCSMAp6lNAKJZYs48hnigQsPwujZiy_lGQ',
      authDomain: 'auth-4fe13.firebaseapp.com',
      databaseURL: 'https://auth-4fe13.firebaseio.com',
      storageBucket: 'auth-4fe13.appspot.com',
      messagingSenderId: '437936581017'
    })

    firebase.auth()
      .onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true })
        } else {
          this.setState({ loggedIn: false })
        }
      })
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <Card>
            <CardSection>
              <Spinner size="large" />
            </CardSection>
          </Card>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Auth' />
        {this.renderContent()}
      </View>
    )
  }
}

export default App