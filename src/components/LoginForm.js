import React, { Component } from 'react'
import { Button, Card, CardSection, Field, Spinner } from './common'
import { Text, StyleSheet } from 'react-native'
import firebase from 'firebase'

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false }

    onButtonPressed() {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }

    onLoginFail(){
        this.setState({ error: "Authentication Failed" ,loading:false})
    }

    onLoginSuccess() {
        console.log('-->> on Success')
        this.setState({ email: '', password: '', loading: false, error: '' })
    }

    renderButton() {
        if (this.state.loading) {
            console.log('--> In loading state')
            return <Spinner size='small' />
        }

        return <Button title="Log In" onPress={this.onButtonPressed.bind(this)} />

    }

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

            <Text style={styles.errorTextStyle}>{this.state.error}</Text>

            <CardSection >
                {this.renderButton()}
            </CardSection>
        </Card>
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
})

export default LoginForm