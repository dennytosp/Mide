import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Register, Login, Homel, Details, Message, WishList, Profile} from '../screens';
import {StatusBar} from 'react-native';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();

const MainStackNavigator = ({initialRoute = 'BotTabNavigation'}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BotTabNavigation" component={TabNavigation} />
        <Stack.Screen name="Home" component={Homel} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="WishList" component={WishList} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
