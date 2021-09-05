import React from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/core';

const Users = () => {
//   const navigation = useNavigation();
  const SignOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
        auth().currentUser.reload();
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Pressable onPress={() => SignOut()}>
        <Text>Users</Text>
      </Pressable>
    </View>
  );
};

export default Users;
