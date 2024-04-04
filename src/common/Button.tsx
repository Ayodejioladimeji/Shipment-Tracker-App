import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
const {width, height} = Dimensions.get('window');

type Props = {
  title: string;
  background: string;
  color: string;
  handlePress: any;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props?.handlePress()}
      style={[styles.button, {backgroundColor: props?.background}]}
      activeOpacity={0.7}>
      <Text style={[styles.buttonText, {color: props.color}]}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.9,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Button;
