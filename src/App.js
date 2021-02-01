import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
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
    }

    render() {
        return <View>
            <Header title='Authentication' />
            <LoginForm />
        </View>
    }
}

export default App