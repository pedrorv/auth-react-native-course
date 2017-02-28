import React, { Component } from 'react'

import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = { email: '' }

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
          />
        </CardSection>
        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm