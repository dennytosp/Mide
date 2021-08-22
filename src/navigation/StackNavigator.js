import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Onboard,
  Splash,
  Welcome,
  Register,
  Login,
  Homel,
  Details,
  Message,
  WishList,
  Profile,
} from '../screens';
import {StatusBar} from 'react-native';
import TabNavigation from './TabNavigation';
const Stack = createNativeStackNavigator();

const MainStackNavigator = ({initialRoute = 'Splash'}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
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
    routeName = 'Splash';
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
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Splash" component={Splash} />
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
