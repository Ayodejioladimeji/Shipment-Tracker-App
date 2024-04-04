import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BottomTabs from './BottomTab';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

type Props = {};

const MainNavigation = (props: Props) => {
  const [token, setToken] = useState('adsfds');

  return !token ? <AuthStack /> : <MainStack />;
};

export default MainNavigation;

const styles = StyleSheet.create({});
