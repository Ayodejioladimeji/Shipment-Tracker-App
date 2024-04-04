import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../assets/colors/colors';
import Shipments from '../screens/Shipments';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

// Custom Tab Bar Component
const CustomTabBarIcon = ({focused, icon}) => {
  const iconSize = focused ? 30 : 30;

  return (
    <Image
      source={icon}
      style={{width: iconSize, height: iconSize}}
      resizeMode="contain"
    />
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          height: 0,
        },
        tabBarActiveTintColor: colors.primaryColor,
        tabBarInactiveTintColor: colors.lightColor,
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          marginBottom: 10,
          fontSize: 12,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}>
      <Tab.Screen
        name="Shipments"
        component={Shipments}
        options={{
          tabBarLabel: 'Shipments',
          tabBarIcon: ({focused}) => (
            <CustomTabBarIcon
              focused={focused}
              icon={require('../assets/images/box.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({focused}) => (
            <CustomTabBarIcon
              focused={focused}
              icon={require('../assets/images/scan.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused}) => (
            <CustomTabBarIcon
              focused={focused}
              icon={require('../assets/images/wallet.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <CustomTabBarIcon
              focused={focused}
              icon={require('../assets/images/profile.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
