import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import {COLORS, SIZES} from '../../constants';
import Button from '../../components/Button/auth';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SignInSignUpSVG from '../../assets/images/SignInOrSignUp.svg';
import styles from './styles';

const Login = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <AntDesignIcon
        name="arrowleft"
        size={30}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SignInSignUpSVG width={350} heigh={250} />
      <View style={styles.rectangleWrapper}>
        <View style={styles.cardWrapper}>
          <Text style={styles.txtSignIn}>Sign In</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Email Address</Text>
            <TextInput
              onFocus={() => setActiveInput('email')}
              style={{
                borderColor:
                  activeInput == 'email' ? COLORS.primary : COLORS.white,
                ...styles.textInput,
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Password</Text>
            <View style={styles.eyeWrapper}>
              <TextInput
                onFocus={() => setActiveInput('password')}
                secureTextEntry={showPassword ? false : true}
                style={{
                  borderColor:
                    activeInput == 'password' ? COLORS.primary : COLORS.white,
                  ...styles.textInput,
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
          <Button label={'Login'} isPrimary={true} style={styles.btnLogin} />
          <View style={styles.txtBottomWrapper}>
            <Text style={styles.txtRowOneBottom}>Don't have an account ?</Text>
            <Text
              style={styles.txtRowTwoBottom}
              onPress={() => {
                navigation.navigate('RegisterScreen');
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
