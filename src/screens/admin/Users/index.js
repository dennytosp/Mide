import React from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import Header from '../../../components/Header';

const Users = () => {
  const SignOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
        auth().currentUser.reload();
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="List Users" />
      <Pressable onPress={() => SignOut()}>
        <Text>Users</Text>
      </Pressable>
    </View>
  );
};

export default Users;
