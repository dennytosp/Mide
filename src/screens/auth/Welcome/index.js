import React from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {thumbnail} from '../../../assets';
import Button from '../../../components/Button/auth';
import styles from './styles';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgWrapper}>
        <Text style={styles.txtInBackground}>Welcome</Text>
        <thumbnail.welcome width={350} height={250} />
      </View>
      <View style={styles.sloganWrapper}>
        <Text style={styles.txtSlogan}>Discover Amazing things!</Text>
        <Button
          label="Create Account"
          isPrimary={true}
          handleOnPress={() => navigation.navigate('Register')}
        />
        <Button
          label="Sign In"
          isPrimary={false}
          handleOnPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
