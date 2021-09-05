import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import { client } from './../screens';
const HomeStack = createNativeStackNavigator();
const WishlistStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor={COLORS.white}>
    <Tab.Screen
      name="Home"
      component={client.Homel}
      options={{
        tabBarLabel: 'Headset',
        tabBarColor: COLORS.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-headset" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Wishlist"
      component={client.WishList}
      options={{
        tabBarLabel: 'Wishlist',
        tabBarColor: COLORS.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-planet" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={client.Message}
      options={{
        tabBarLabel: 'Message',
        tabBarColor: COLORS.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-mail" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={client.Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: COLORS.primary,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={client.Homel}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => console.log('Onclick drawer')}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const WishlistStackScreen = () => (
  <WishlistStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.purple,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <WishlistStack.Screen
      name="Wishlist"
      component={client.WishList}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => console.log('Onclick drawer')}></Icon.Button>
        ),
      }}
    />
  </WishlistStack.Navigator>
);
