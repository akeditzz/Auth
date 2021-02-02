import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Button, CardSection, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    state = { loggedIn: null }

    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyC3fNcVYvK0gy5kyVClChhL2TrpxdoLG30',
            authDomain: 'auth-cf9b9.firebaseapp.com',
            projectId: 'auth-cf9b9',
            storageBucket: 'auth-cf9b9.appspot.com',
            messagingSenderId: '865827189081',
            appId: '1:865827189081:web:32a4c863b42c4a11425c48',
            measurementId: 'G-DVW0YGERYP'
        })

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: null })
            } else {
                this.setState({ loggedIn: null })
            }
        })
    }

    logoutUser() {
        firebase.auth().signOut()
    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true: {
                return <CardSection>
                    <Button title='Logout' onPress={this.logoutUser.bind(this)} />
                </CardSection>
            }
            case false: {
                return <LoginForm />
            }
            default: {
                return <View style={{
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
                ><Spinner size='large' />
                </View>
            }
        }
    }

    render() {
        return <View>
            <Header title='Authentication' />
            {this.renderContent()}
        </View>
    }
}

export default App