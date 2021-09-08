import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const FormInput = ({
  focusRemote,
  placeHolderText,
  onState,
  keyboardType,
  secureTextEntry,
  style,
}) => {
  return (
    <View>
      <TextInput
        style={{
          borderRadius: 5,
          ...styles.inputWrapper,
          ...style,
        }}
        onFocus={focusRemote}
        placeholder={placeHolderText}
        onChangeText={onState}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default FormInput;
