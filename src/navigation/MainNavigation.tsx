import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BottomTabs from './BottomTab';
import OnboardingScreen from '../screens/OnboardingScreen';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

type Props = {};

const MainNavigation = (props: Props) => {
  const [token, setToken] = useState(null);

  return !token ? <AuthStack /> : <MainStack />;
};

export default MainNavigation;

const styles = StyleSheet.create({});
