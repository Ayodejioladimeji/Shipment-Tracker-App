import React from 'react';
import {Dimensions, StyleSheet, Text, View, Platform} from 'react-native';
import Toast from 'react-native-toast-message';
const {width} = Dimensions.get('window');

export const ShowMessage = (type, text1, text2) => {
  if (text1 !== '' && text2 !== '') {
    Toast.show({
      type: type,
      props: {
        text1,
        text2,
        type,
      },
      topOffset: 0,
    });
  }
};

type Props = {
  margin?: boolean;
};

export const Toasts = ({margin}: Props) => {
  const toastConfig: any = {
    toast: ({props}) => {
      return (
        <View>
          <View
            style={
              props.text1 === 'Error' ? styles.toastError : styles.toastSuccess
            }>
            <View>
              <Text style={styles.toastHeading}>{props.text1}</Text>
              <Text style={styles.toastBody}>{props.text2}</Text>
            </View>
          </View>
        </View>
      );
    },
  };

  return (
    <View style={{zIndex: 90}}>
      <Toast config={toastConfig} position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  toastError: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderLeftColor: 'red',
    borderLeftWidth: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    borderWidth: 0.6,
    borderColor: 'red',
  },
  toastSuccess: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderLeftColor: 'green',
    borderLeftWidth: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    borderWidth: 0.6,
    borderColor: 'green',
  },
  toastHeading: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  toastBody: {
    fontSize: 12,
    width: width * 0.8,
    lineHeight: 20,
    color: '#000',
  },
});
