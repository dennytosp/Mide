import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants';

import {styles} from './styles';

const ToggleButton = ({fields, btnPressed}) => {
  console.log(fields);
  return (
    <View style={styles.container}>
      {fields.map(item => (
        <TouchableOpacity
          style={[
            styles.btn,
            {backgroundColor: item.isActive ? COLORS.gray01 : COLORS.white},
          ]}
          onPress={() => btnPressed(item)}>
          <Text
            style={
              item.isActive ? styles.btnLabelActicve : styles.btnLabelInacticve
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ToggleButton;
