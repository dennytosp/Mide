import React, {useState, useEffect} from 'react';
import {View, StatusBar, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {lottie} from '../../../assets';

const Splash = ({navigation}) => {
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
          navigation.replace('Welcome');
        }}
      />
    </View>
  );
};

export default Splash;
