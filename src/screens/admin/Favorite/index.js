import React from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';

const Favorite = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="List Favorite" />
      <Pressable onPress={() => {}}>
        <Text>Favorite</Text>
      </Pressable>
    </View>
  );
};

export default Favorite;
