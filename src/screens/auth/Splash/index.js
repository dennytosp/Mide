import React, {useState, useEffect} from 'react';
import {View, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {lottie} from '../../../assets';
import auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <LottieView
        source={lottie.lottie4}
        autoPlay
        loop={false}
        speed={0.7}
        onAnimationFinish={() => {
          user ? navigation.replace('Checked') : navigation.replace('Welcome');
        }}
      />
    </View>
  );
};

export default Splash;
