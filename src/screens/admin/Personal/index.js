import React from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';

const Personal = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="List Personal" />
      <Pressable onPress={() => {}}>
        <Text>Personal</Text>
      </Pressable>
    </View>
  );
};

export default Personal;
