import React from 'react';
import {SafeAreaView, Text, View, StatusBar} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import WelcomeSVG from '../../assets/images/Welcome.svg';
import Button from '../../components/Button/auth';
import styles from './styles';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <View style={styles.bgWrapper}>
        <Text style={styles.txtInBackground}>Welcome</Text>
        <WelcomeSVG width={350} height={250} />
      </View>
      <View style={styles.sloganWrapper}>
        <Text style={styles.txtSlogan}>Discover Amazing things!</Text>
        <Button
          label="Create Account"
          isPrimary={true}
          handleOnPress={() => navigation.navigate('RegisterScreen')}
        />
        <Button
          label="Sign In"
          isPrimary={false}
          handleOnPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
