import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {View, Text, Image, TouchableOpacity, Pressable} from 'react-native';
import {COLORS} from '../../../constants';
import styles from './styles.js';

const Details = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.imageHeaderView,
          {backgroundColor: route.params.details.bg_color},
        ]}>
        <View style={styles.headerWrapper}>
          <View style={styles.backBtnView}>
            <Icon
              name="arrow-back-outline"
              color={COLORS.white}
              size={20}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.backBtnView}>
            <Icon name="notifications-outline" color={COLORS.white} size={20} />
          </View>
        </View>
        <View style={styles.imageViewHeadset}>
          <Image
            source={route.params.details.image}
            style={styles.imageSizeHeadset}
          />
        </View>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headsetDescWrapper}>
          <View>
            <Text style={styles.txtTitle}>{route.params.details.title}</Text>
            <View style={styles.iconStarWrapper}>
              <Icon name="star" style={{fontSize: 22, color: COLORS.yellow}} />
              <Icon name="star" style={{fontSize: 22, color: COLORS.yellow}} />
              <Icon name="star" style={{fontSize: 22, color: COLORS.yellow}} />
              <Icon name="star" style={{fontSize: 22, color: COLORS.yellow}} />
              <Icon name="star-outline" size={22} color={COLORS.yellow} />
            </View>
          </View>
          <View style={styles.optionViewRight}>
            <View style={styles.optionView}>
              <Icon name="share-social-outline" size={22} />
            </View>
            <View style={styles.optionView}>
              <Icon name="heart-outline" size={25} />
            </View>
          </View>
          <Text style={styles.txtDescription}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.txtPrice}>{route.params.details.price}</Text>
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.txtButton}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Details;
