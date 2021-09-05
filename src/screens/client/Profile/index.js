import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  ToastAndroid,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {headset, photos} from '../../../assets';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {
  const usum =
    'https://f37-zpg.zdn.vn/2042059238978378618/80a3438125ded18088cf.jpg';

  const SignOut = async () => {
    await auth()
      .signOut()
      .then(() => {
        ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
        auth().currentUser.reload();
        navigation.refresh();
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={24} color="#52575d" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="more-vertical" size={24} color="#52575d" />
          </TouchableOpacity>
        </View>

        <View style={{alignSelf: 'center', paddingTop: 10}}>
          <View style={styles.profileImage}>
            <Image source={photos.avatar} style={styles.image} />
          </View>
          <View style={styles.dm}>
            <TouchableOpacity onPress={() => SignOut()}>
              <Icon name="toggle-left" size={18} color="#DFD8C8" />
            </TouchableOpacity>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <TouchableOpacity>
              <Icon
                name="edit-2"
                size={32}
                color="#DFD8C8"
                style={{marginTop: 6, marginLeft: 2}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <Text style={[styles.text, {fontWeight: '200', fontSize: 28}]}>
            {/* {jsUcfirst(username)} */}
            {/* Dinh Tien Phong */}
          </Text>
          <Text style={[styles.text, {color: '#AEB5BC', fontSize: 16}]}>
            {/* @dinhtienphong */}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={[styles.text, {fontSize: 24}]}>195</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View
            style={[
              styles.statusBox,
              {borderColor: '#DFD8C8', borderLeftWidth: 1, borderRightWidth: 1},
            ]}>
            <Text style={[styles.text, {fontSize: 24}]}>1M</Text>
            <Text style={[styles.text, styles.subText]}>Followers</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={[styles.text, {fontSize: 24}]}>25</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </View>
        </View>

        <View style={{marginTop: 32}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.mediaImageContainer}>
              <Image
                source={headset.jpl_white}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={headset.jpl_blue}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={headset.jpl_black}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImageContainer}>
              <Image
                source={headset.mivi_white}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>

          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                {fontSize: 24, color: '#DFD8C8', fontWeight: '300'},
              ]}>
              04
            </Text>
            <Text
              style={[
                styles.text,
                {fontSize: 12, color: '#DFD8C8', textTransform: 'uppercase'},
              ]}>
              Media
            </Text>
          </View>
        </View>

        <Text style={[styles.subText, styles.recent]}>Recent Activity</Text>

        <View style={{alignItems: 'center'}}>
          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{width: 250}}>
              <Text
                style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
                Email: dinhtienphong@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.recentItem}>
            <View style={styles.recentItemIndicator}></View>
            <View style={{width: 250}}>
              <Text
                style={[styles.text, {color: '#41444B', fontWeight: '300'}]}>
                Phone: 085 898 2432
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
