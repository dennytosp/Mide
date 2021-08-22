import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {COLORS} from '../../../constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {thumbnail} from '../../../assets';
import {FormInput, Button} from './../../../components';
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

      <thumbnail.auth width={350} heigh={250} />
      <View style={styles.rectangleWrapper}>
        <View style={styles.cardWrapper}>
          <Text style={styles.txtSignIn}>Sign In</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.txtForm}>Email Address</Text>
            <FormInput
              focusRemote={() => setActiveInput('email')}
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
            handleOnPress={() => navigation.navigate('BotTabNavigation')}
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
