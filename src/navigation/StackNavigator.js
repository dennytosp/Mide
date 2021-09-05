import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {authen, admin, client} from './../screens';
import {StatusBar} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import {StackStep} from './';
const Stack = createNativeStackNavigator();

const MainStackNavigator = ({initialRoute = 'Splash'}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [user, setUser] = useState();
  const [isCheck, setIsCheck] = useState();

  function onAuthStateChanged(user) {
    if (user) {
      database()
        .ref('User')
        .child(user?._user.uid)
        .once('value')
        .then(snapshot => {
          setUser(user);
          setIsCheck(snapshot.val().check);
        });
    } else {
      setUser(user);
    }
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  let routeName;

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          AsyncStorage.getItem('Onboardingfirst').then(value => {
            if (value == null) {
              AsyncStorage.setItem('Onboardingfirst', 'true');
              setIsFirstLaunch(true);
            } else {
              setIsFirstLaunch(false);
            }
          });
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };

    runAsync();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboard';
  } else {
    routeName = 'Checked';
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Stack.Navigator
        initialRouteName={routeName}
        screenOptions={{headerShown: false}}>
        {user ? (
          <>
            {/* <Stack.Screen name="Splash" component={authen.Splash} /> */}
            <Stack.Screen
              name="Checked"
              component={isCheck ? StackStep.AdminTab : StackStep.ClienTab}
            />
            <Stack.Screen name="Users" component={admin.Users} />
            <Stack.Screen name="Products" component={admin.Products} />
            <Stack.Screen name="Personal" component={admin.InputType} />

            <Stack.Screen name="Home" component={client.Homel} />
            <Stack.Screen name="Message" component={client.Message} />
            <Stack.Screen name="WishList" component={client.WishList} />
            <Stack.Screen name="Profile" component={client.Profile} />
            <Stack.Screen name="Details" component={client.Details} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={authen.Welcome} />
            <Stack.Screen name="Log" component={authen.Log} />
            <Stack.Screen name="Onboard" component={authen.Onboard} />
            <Stack.Screen name="Register" component={authen.Register} />
            <Stack.Screen name="Login" component={authen.Login} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
export default MainStackNavigator;
