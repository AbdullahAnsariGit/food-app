import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Login, Signup, Splash} from './src/screens/authStack';
import {Explore} from './src/screens/appStack';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
