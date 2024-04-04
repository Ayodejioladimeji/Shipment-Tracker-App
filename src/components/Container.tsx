import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

const Container = ({children, background, light, ...props}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={light ? 'light-content' : 'dark-content'}
        backgroundColor={background || '#FFFFFF'}
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
