import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Explore } from '../screens/appStack';
import { Login, Signup } from '../screens/authStack';


const Router = () => {
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    initialRouteName="Login"
    >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Explore" component={Explore} />

  </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})