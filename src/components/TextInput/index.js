import React from 'react';
import {Text, TouchableOpacity, TextInput, View} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const FormInput = ({focusRemote, placeHolderText, style}) => {
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
      />
    </View>
  );
};

export default FormInput;
