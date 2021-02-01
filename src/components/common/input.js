import React from 'react'
import { StyleSheet, TextInput,View,Text } from 'react-native'

const input= ({label})=>{
    return <View>
        <Text>{label}</Text>
        <TextInput

        />
    </View>
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

export {input}