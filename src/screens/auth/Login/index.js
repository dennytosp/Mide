import React, {useState} from 'react';
import {View, Text, SafeAreaView, ToastAndroid} from 'react-native';
import {COLORS} from '../../../constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {thumbnail} from '../../../assets';
import {FormInput, Button} from './../../../components';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function validateEmail(email) {
    const wrongFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return wrongFormat.test(String(email).toLowerCase());
  }

  const SignIn = (email, password) => {
    if (email == null || password == null) {
      ToastAndroid.show('Please do not leave it blank!', ToastAndroid.SHORT);
    } else if (!validateEmail(email)) {
      ToastAndroid.show('Wrong email format!!', ToastAndroid.SHORT);
    } else if (password.length < 6) {
      ToastAndroid.show('Password is too short!', ToastAndroid.SHORT);
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(snapshot => {
          console.log(snapshot);
          ToastAndroid.show('Logged in successfully!', ToastAndroid.SHORT);
          // navigation.navigate('Checked');
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            ToastAndroid.show(
              'This email address is invalid!',
              ToastAndroid.SHORT,
            );
          } else if (error.code === 'auth/user-not-found') {
            ToastAndroid.show(
              'This email address not available!',
              ToastAndroid.SHORT,
            );
          } else if (error.code === 'auth/wrong-password') {
            ToastAndroid.show(
              'This password is incorrect!',
              ToastAndroid.SHORT,
            );
          }

          console.error(error);
        });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesignIcon
        name="arrowleft"
        size={30}
        onPress={() => {
          navigation.navigate('Welcome');
        }}
      />

      <thumbnail.auth width={350} heigh={250} />
      <View style={styles.rectangleWrapper}>
        <View style={styles.cardWrapper}>
          <Text style={styles.txtSignIn}>Sign In</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Email Address</Text>
            <FormInput
              focusRemote={() => setActiveInput('email')}
              keyboardType="email-address"
              onState={text => setEmail(text)}
              style={{
                borderColor:
                  activeInput == 'email' ? COLORS.primary : COLORS.white,
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Password</Text>
            <View style={styles.eyeWrapper}>
              <FormInput
                focusRemote={() => setActiveInput('password')}
                onState={text => setPassword(text)}
                secureTextEntry={showPassword ? false : true}
                style={{
                  borderColor:
                    activeInput == 'password' ? COLORS.primary : COLORS.white,
                }}
              />
              <AntDesignIcon
                name="eye"
                onPress={() => setShowPassword(!showPassword)}
                style={{
                  color: showPassword ? COLORS.primary : COLORS.black,
                  ...styles.iconEye,
                }}
              />
            </View>
          </View>

          {/* Forgon password link */}
          <Text style={styles.txtForgot}>Forgot Password?</Text>
          <Button
            handleOnPress={() => SignIn(email, password)}
            label={'Login'}
            isPrimary={true}
            style={styles.btnLogin}
          />
          <View style={styles.txtBottomWrapper}>
            <Text style={styles.txtRowOneBottom}>Don't have an account ?</Text>
            <Text
              style={styles.txtRowTwoBottom}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Create Account
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
