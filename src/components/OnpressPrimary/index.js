import React from 'react';
import {Pressable, View, Text} from 'react-native';
import styles from './styles';

const OnpressPrimary = ({
  textButton,
  handleOnpressButton,
  handleOnpressEvent,
  textEvent,
  style,
}) => {
  return (
    <View style={styles.wrapperFooter}>
      <Pressable style={styles.wrapperButton} onPress={handleOnpressButton}>
        <Text style={styles.txtButton}>{textButton}</Text>
      </Pressable>
      <View>
        <Pressable onPress={handleOnpressEvent}>
          <Text style={styles.txtForgot}>{textEvent}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnpressPrimary;
