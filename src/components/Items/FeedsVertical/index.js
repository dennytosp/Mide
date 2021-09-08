import React from 'react';
import {Image, View, Pressable, Text} from 'react-native';
import styles from './styles';

const FeedsVertical = ({
  avatar,
  titleText,
  contentText,
  timeText,
  lineTips,
  handleOnPressAvatar,
  style,
}) => {
  return (
    <View style={({...style}, styles.wrapper)}>
      <Pressable onPress={handleOnPressAvatar}>
        <Image
          source={avatar}
          style={styles.listImageOfAction}
          resizeMode="contain"
        />
      </Pressable>
      <View
        style={{
          flex: 1,
          marginLeft: 10,
        }}>
        <View style={styles.betweenTitle}>
          <Text style={styles.txtTitle}>{titleText}</Text>
          <Text style={styles.txtTime}>{timeText}</Text>
        </View>
        <Text style={styles.txtContent}>{contentText}</Text>
        {lineTips ? <View style={styles.lineTips}>{lineTips}</View> : null}
      </View>
    </View>
  );
};

export default FeedsVertical;
