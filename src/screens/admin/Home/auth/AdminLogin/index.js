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

const AdminLogin = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          centerText="Login"
          handleOnPressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderInput = () => {
    return (
      <View>
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

        <View style={styles.showWrapper}>
          <FormInputAdmin
            placeHolder="Confrim Password"
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

  const _renderFooter = () => {
    return (
      <View>
        <OnpressPrimary
        textButton="Login"
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
      <View>
        <_renderFooter />
      </View>
    </ScrollView>
  );
};

export default AdminLogin;
