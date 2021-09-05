import React, {useState} from 'react';
import {ToastAndroid, SafeAreaView, Text, View} from 'react-native';
import {COLORS} from '../../../constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {thumbnail} from '../../../assets';
import {FormInput, Button} from './../../../components';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Register = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [check, setCheck] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function validateEmail(email) {
    const wrongFormat =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return wrongFormat.test(String(email).toLowerCase());
  }

  const SignUp = (check, name, email, password) => {
    if (name == null || email == null || password == null) {
      ToastAndroid.show('Please do not leave it blank!', ToastAndroid.SHORT);
    } else {
      if (!validateEmail(email)) {
        ToastAndroid.show('Wrong email format!', ToastAndroid.SHORT);
      } else if (password.length < 6) {
        ToastAndroid.show('Password is too short!', ToastAndroid.SHORT);
      } else {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            const idTokenResult = auth().currentUser.uid;
            database()
              .ref('User/' + idTokenResult)
              .update({
                uid: idTokenResult,
                name: name,
                email: email,
                check: check,
              })
              .then(snapshot => console.log(snapshot))
              .catch(err => console.log(err));
            ToastAndroid.show('Register successful!', ToastAndroid.SHORT);
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              ToastAndroid.show(
                'That email address is already in use!',
                ToastAndroid.SHORT,
              );
            }

            if (error.code === 'auth/invalid-email') {
              ToastAndroid.show(
                'That email address is invalid!',
                ToastAndroid.SHORT,
              );
            }

            console.error(error);
          });
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesignIcon
        name="arrowleft"
        size={30}
        onPress={() => navigation.goBack()}
      />
      <thumbnail.auth width={350} heigh={250} />
      <View style={styles.rectangleWrapper}>
        <View style={styles.cardWrapper}>
          <Text style={styles.txtRegister}>Create Account</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Fullname</Text>
            <FormInput
              focusRemote={() => setActiveInput('fullname')}
              onState={text => setName(text)}
              style={{
                borderColor:
                  activeInput == 'fullname' ? COLORS.primary : COLORS.white,
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Email Address</Text>
            <FormInput
              keyboardType="email-address"
              focusRemote={() => setActiveInput('email')}
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
          <Button
            handleOnPress={() => SignUp(check, name, email, password)}
            label={'Register'}
            isPrimary={true}
            style={styles.btnRegister}
          />
          <View style={styles.txtBottomWrapper}>
            <Text style={styles.txtRowOneBottom}>
              Already have an account ?
            </Text>
            <Text
              style={styles.txtRowTwoBottom}
              onPress={() => navigation.navigate('Login')}>
              Sign In
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
