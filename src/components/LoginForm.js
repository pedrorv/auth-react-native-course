import React, { Component } from 'react'
import firebase from 'firebase'
import { Text } from 'react-native'
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = { email: '', password: '', error: '' }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ error: '' })

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({ error: 'Authentication failed.' })
          })
      })
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="user@example.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Enter password"
            secure={true}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm