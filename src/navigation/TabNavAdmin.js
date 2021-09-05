import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../constants';
import {admin} from './../screens';

const HomeStack = createNativeStackNavigator();
const WishlistStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Users" activeColor={COLORS.white}>
    <Tab.Screen
      name="Users"
      component={admin.Users}
      options={{
        tabBarLabel: 'User',
        tabBarColor: COLORS.tabAdmin,
        tabBarIcon: ({color}) => (
          <Icon name="ios-headset" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Products"
      component={admin.Products}
      options={{
        tabBarLabel: 'Product',
        tabBarColor: COLORS.tabAdmin,
        tabBarIcon: ({color}) => (
          <Icon name="ios-planet" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Personal"
      component={admin.InputType}
      options={{
        tabBarLabel: 'Personal',
        tabBarColor: COLORS.tabAdmin,
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
