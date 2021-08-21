import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../../constants';
import Button from '../../../components/Button/auth';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {thumbnail} from '../../../assets';
import styles from './styles';

const Register = ({navigation}) => {
  const [activeInput, setActiveInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
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
            <TextInput
              onFocus={() => setActiveInput('fullname')}
              style={{
                borderColor:
                  activeInput == 'fullname' ? COLORS.primary : COLORS.white,
                ...styles.textInput,
              }}
            />
          </View>
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
          <Button
          handleOnPress={() => navigation.navigate('BotTabNavigation')}
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
