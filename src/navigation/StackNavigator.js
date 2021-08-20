import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, Register, Login} from '../screens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({initialRoute = 'WelcomeScreen'}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="WelcomeScreen" component={Welcome} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
