import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Container from '../components/Container';
import {colors} from '../assets/colors/colors';
import {ProductIcon} from '../assets';
import Button from '../common/Button';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const OnboardingScreen = (props: Props) => {
  const navigation = useNavigation<any>();

  return (
    <Container background={colors.primaryColor} light={true}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <ProductIcon />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            background={colors.whiteColor}
            color={colors.primaryColor}
            handlePress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    // marginHorizontal: 20,
  },
});
export default OnboardingScreen;
