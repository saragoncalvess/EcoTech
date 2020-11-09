import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native'

// Fonts //
import { Signika_400Regular, Signika_700Bold } from '@expo-google-fonts/signika'
import { BalsamiqSans_400Regular, BalsamiqSans_700Bold, useFonts } from '@expo-google-fonts/balsamiq-sans'

import Routes from './src/routes'

export default function App() {

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
    Signika_400Regular,
    Signika_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  else {
    return (
      <NavigationContainer>

        <Routes/>

        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }

}