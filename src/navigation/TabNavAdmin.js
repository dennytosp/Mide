import React from 'react';
import {admin} from './../screens';
import CustomTabBar from './CustomTabBar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} screen />}>
      <Tab.Screen
        name="Home"
        component={admin.Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Products"
        component={admin.Products}
        options={{
          tabBarLabel: 'Products',
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={admin.Favorite}
        options={{
          tabBarLabel: 'Favorite',
        }}
      />
      <Tab.Screen
        name="Users"
        component={admin.Users}
        options={{
          tabBarLabel: 'Users',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
