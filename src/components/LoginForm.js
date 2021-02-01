import React, { Component } from 'react'
import { Button, Card, CardSection, Field } from './common'

class LoginForm extends Component {
    state = { email: '' ,password:''}

    render() {
        return <Card>
            <CardSection >
                <Field
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder="user@gmail.com"
                />
            </CardSection>
            <CardSection >
                <Field
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder="password"
                    secureTextEntry
                />
            </CardSection>
            <CardSection >
                <Button title="Log In" />
            </CardSection>
        </Card>
    }
}

export default LoginForm