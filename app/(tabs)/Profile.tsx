import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'

export class Profile extends Component {
  render() {
    return (
      <View>
          <StatusBar style='dark' />
        <Text>Profile</Text>
      </View>
    )
  }
}

export default Profile