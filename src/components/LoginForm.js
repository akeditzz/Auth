import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Button, Card, CardSection } from './common'

class LoginForm extends Component {
    state = { text: '' }

    render() {
        return <Card>
            <CardSection >
                <TextInput
                    value={this.state.text}
                    style={styles.textInputStyle}
                    onChangeText={text => this.setState({ text })}
                />
            </CardSection>
            <CardSection />
            <CardSection >
                <Button title="Log In" />
            </CardSection>
        </Card>
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        width: 0,
        flex: 1,
        flexDirection: 'row',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 4
    }
})

export default LoginForm