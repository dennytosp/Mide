import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';
import styles from './styles';

const Button = ({label, isPrimary, style, handleOnPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleOnPress}
      style={{
        backgroundColor: isPrimary ? COLORS.primary : COLORS.white,
        borderColor: isPrimary ? COLORS.primary : COLORS.black,
        ...styles.input,
        ...style,
      }}>
      <Text
        style={{
          color: isPrimary ? COLORS.white : COLORS.black,
          ...styles.txtTitle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
