import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {BellIcon, ProductIcon, ProductIcons} from '../assets';
import Container from '../components/Container';
import {colors} from '../assets/colors/colors';

interface Props {}

const Shipments = (props: Props) => {
  return (
    <Container background={colors.whiteColor} light={false}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Image
            source={require('../assets/images/user.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <ProductIcons />

          <View style={styles.bellContainer}>
            <BellIcon />
          </View>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
    height: 70,
  },
  image: {
    height: 40,
    width: 40,
  },
  bellContainer: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: colors.sectionColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Shipments;
