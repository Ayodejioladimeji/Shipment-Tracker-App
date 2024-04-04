import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../assets/colors/colors';
import Container from '../components/Container';
import TopNavigationComponent from '../components/TopNavigation';
import {s, vs, ms} from 'react-native-size-matters';
import {Toasts} from '../common/Toasts';
import {View, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import Button from '../common/Button';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

interface Props {}

const LoginScreen = (props: Props) => {
  const [text, setText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  //
  return (
    <Container background={colors.whiteColor} light={false}>
      <Toasts />
      <TopNavigationComponent />

      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>
        <Text style={styles.subheading}>
          Please enter your First, Last name and your phone number in order to
          register
        </Text>

        <TextInput
        // onChangeText={setText}
        // value={text}
        // placeholder="Enter text..."
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 16,
    fontWeight: '600',
    color: colors.blackColor,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.blackColor,
    lineHeight: 25,
  },
  inputs: {
    height: 40,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  // errorText: {
  //   color: 'red',
  //   marginBottom: 10,
  // },
});

export default LoginScreen;
