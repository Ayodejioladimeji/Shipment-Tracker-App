import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTab';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  });

  //
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
