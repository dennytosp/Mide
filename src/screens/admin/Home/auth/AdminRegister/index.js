import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {FormInputAdmin, Heading, OnpressPrimary} from '../../../../../components';
import styles from './styles';
import {COLORS} from '../../../../../constants';
import {Button} from 'react-native-share';
import {CheckBox} from 'react-native-elements';
import {Ionicon} from 'react-native-vector-icons/Ionicons';

const AdminRegister = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          centerText="Sign Up"
          rightText="Login"
          handleOnPressLeft={() => navigation.goBack()}
          handleOnPressRight={() => navigation.navigate('AdminLogin')}
        />
      </View>
    );
  };

  const _renderInput = () => {
    return (
      <View>
        <FormInputAdmin placeHolder="Name" />
        <FormInputAdmin placeHolder="Email" keyboardType="email-address" />
        <View style={styles.showWrapper}>
          <FormInputAdmin
            placeHolder="Password"
            secureTextEntry={showPassword ? false : true}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10 * 2,
              top: 15,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.txtShow}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _renderCheck = () => {
    return (
      <View style={styles.wrapperCheck}>
        <CheckBox checked={check} onPress={() => setCheck(!check)} />
        <Text style={{color: '#666666'}}>
          I would like to receive your newsletter and other promotional
          information.
        </Text>
      </View>
    );
  };

  const _renderFooter = () => {
    return (
      <View>
        <OnpressPrimary
          textButton="Sign Up"
          textEvent="Forgot your password?"
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}>
      <View>
        <_renderHeader />
        <_renderInput />
      </View>
      <_renderCheck />

      <View>
        <_renderFooter />
      </View>
    </ScrollView>
  );
};

export default AdminRegister;
