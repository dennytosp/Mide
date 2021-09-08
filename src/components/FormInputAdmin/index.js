import React from 'react';
import {View, TextInput} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';

const FormInputAdmin = ({
  placeText,
  placeHolder,
  keyboardType,
  focusRemote,
  onState,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={{marginBottom: 16}}>
      <TextInput
        style={{borderRadius: 7, ...styles.wrapperInput, ...style}}
        placeholder={placeHolder}
        placeholderTextColor={COLORS.placeText}
        onFocus={focusRemote}
        onChangeText={onState}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormInputAdmin;
