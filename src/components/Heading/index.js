import React from 'react';
import {SafeAreaView, View, Pressable, Text} from 'react-native';
import {COLORS} from '../../constants';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicon from 'react-native-vector-icons/Ionicons';

const Heading = ({
  leftText,
  centerText,
  rightText,
  isPrimary,
  handleOnPressLeft,
  handleOnPressCenter,
  handleOnPressRight,
  headerStyle,
  style,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <SafeAreaView style={headerStyle}>
      <View
        style={{
          marginTop: top,
          marginBottom: 32,
          ...style,
        }}>
        <View style={styles.header}>
          {!leftText ? (
            <Pressable onPress={handleOnPressLeft}>
              <Ionicon
                name="close-outline"
                size={24}
                color={COLORS.placeText}
              />
            </Pressable>
          ) : (
            <Pressable onPress={handleOnPressLeft}>
              <Text
                style={{
                  color: isPrimary ? COLORS.greenLight : COLORS.white,
                  ...styles.txtNormal,
                }}>
                {leftText}
              </Text>
            </Pressable>
          )}

          <Pressable onPress={handleOnPressCenter}>
            <Text
              style={{
                color: isPrimary ? COLORS.black : COLORS.white,
                ...styles.txtBold,
              }}>
              {centerText}
            </Text>
          </Pressable>
          <Pressable onPress={handleOnPressRight}>
            <Text
              style={{
                color: isPrimary ? COLORS.greenLight : COLORS.white,
                ...styles.txtNormal,
              }}>
              {rightText}
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Heading;
