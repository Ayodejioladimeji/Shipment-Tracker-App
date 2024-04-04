import {useNavigation} from '@react-navigation/native';
import React, {memo, useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../assets/colors/colors';
import {ChevronIcon} from '../assets';

const TopNavigationComponent = memo(props => {
  const {goBack, navigate} = useNavigation();

  //

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => goBack()}>
      <ChevronIcon />
      <Text style={styles.text}>Cancel</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    // backgroundColor: colors.lightColor,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default TopNavigationComponent;
