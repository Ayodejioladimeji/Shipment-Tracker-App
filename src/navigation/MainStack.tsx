import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();

type Props = {};

const MainStack = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="BottomTab" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
