import React from 'react';
import {Image, View, Pressable, Text} from 'react-native';
import styles from './styles';

const ImagesVertical = ({
  titleText,
  contentText,
  timeText,
  contentImage,
  detCheck,
  titleStyle,
  handleOnPressImage,
  style,
}) => {
  return (
    <View style={{marginBottom: 16, ...style}}>
      <Pressable onPress={handleOnPressImage}>
        <Image style={styles.wrapperImage} />
      </Pressable>
      <View>
        <Text style={detCheck ? styles.txtTitleDetails : styles.txtTitle}>
          {titleText}
        </Text>
        <Text style={detCheck ? styles.txtAuthor : styles.txtContent}>
          {contentText}
        </Text>
        <Text style={detCheck ? styles.txtContentDetails : styles.txtTime}>
          {timeText}
        </Text>
      </View>
    </View>
  );
};

export default ImagesVertical;
