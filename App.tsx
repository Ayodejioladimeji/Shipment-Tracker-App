import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTab';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  const [token, setToken] = useState(null);

  //
  return (
    <NavigationContainer>
      {token ? <BottomTabs /> : <LoginScreen />}
    </NavigationContainer>
  );
}
