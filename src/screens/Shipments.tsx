import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BellIcon,
  FilterIcon,
  ProductIcon,
  ProductIcons,
  ScanIcon,
} from '../assets';
import Container from '../components/Container';
import {colors} from '../assets/colors/colors';
const {width} = Dimensions.get('window');

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

        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.username}>Ibrahim Shaker</Text>

        {/* filter section */}
        <View style={styles.filterSection}>
          <TouchableOpacity style={styles.filters} activeOpacity={0.7}>
            <FilterIcon />
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.scan} activeOpacity={0.7}>
            <ScanIcon />
            <Text style={styles.scanText}>Add Scan</Text>
          </TouchableOpacity>
        </View>

        {/* shipments section */}
        {/* <View style={styles.shipmentContainer}>
          <Text></Text>
        </View> */}
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
    height: 70,
    marginBottom: 12,
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
  hello: {
    fontSize: 15,
    marginBottom: 5,
    color: colors.blackColor,
  },
  username: {
    fontSize: 28,
    color: colors.blackColor,
    fontWeight: '500',
  },
  filterSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  filters: {
    backgroundColor: colors.lightColor,
    height: 50,
    width: width * 0.45,
    color: colors.blackColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  filterText: {
    color: colors.blackColor,
    fontWeight: '500',
    fontSize: 16,
  },
  scan: {
    backgroundColor: colors.primaryColor,
    height: 50,
    width: width * 0.45,
    color: colors.whiteColor,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  scanText: {
    color: colors.whiteColor,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Shipments;
