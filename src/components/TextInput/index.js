import React from 'react';
import {Text, TouchableOpacity, TextInput, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const FormInput = ({focusRemote, placeHolderText, onState, keyboardType, secureTextEntry, style}) => {
  return (
    <View>
      <TextInput
        style={{
          padding: SIZES.base,
          backgroundColor: COLORS.white,
          borderRadius: 5,
          paddingVertical: SIZES.base * 1.5,
          borderWidth: 1.5,
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
