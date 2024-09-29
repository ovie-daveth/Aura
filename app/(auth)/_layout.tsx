import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class AuthLayout extends Component {
  render() {
    return (
    <>
      <Stack>
        <Stack.Screen name="sign-in"
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="sign-up"
        options={{
          headerShown: false
        }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
    )
  }
}

export default AuthLayout
