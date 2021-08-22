import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';

import {styles} from './styles';
import {photos} from '../../../../assets';

const Data = [
  {
    id: 1,
    name: 'Martin Randolph',
    image: photos.user1,
    lastMessage: 'You: What’s man! · 9:40 AM ',
  },
  {
    id: 2,
    name: 'Andrew Parker',
    image: photos.user2,
    lastMessage: 'You: Ok, thanks! · 9:25 AM ',
  },
  {
    id: 2,
    name: 'Karen Castillo',
    image: photos.user3,
    lastMessage: 'You: Ok, See you in To… · Fri',
  },
  {
    id: 2,
    name: 'Maisy Humphrey',
    image: photos.user4,
    lastMessage: 'Have a good day, Maisy! · Fri',
  },
  {
    id: 2,
    name: 'Joshua Lawrence',
    image: photos.user5,
    lastMessage: 'The business plan loo…  · Thu ',
  },
];

const UserListing = ({navigation}) => {
  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <View style={styles.itemRowWrapper}>
        <TouchableOpacity onPress={() => console.log('--------Camera--------')}>
          <Image style={styles.itemRowIcon} source={photos.camera} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('--------Call--------')}>
          <Image style={styles.itemRowIcon} source={photos.call} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('--------Video--------')}>
          <Image style={styles.itemRowIcon} source={photos.video_call} />
        </TouchableOpacity>
      </View>
      <View style={styles.itemRowWrapper}>
        <TouchableOpacity
          onPress={() => console.log('--------Settings--------')}>
          <Image
            style={styles.itemRowIcon}
            source={photos.converation_settings}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('--------Notifications--------')}>
          <Image style={styles.itemRowIcon} source={photos.notifications} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('--------Delete--------')}>
          <Image
            style={styles.itemRowIcon}
            source={photos.delete_conversation}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.userItemContainer}>
        <Image source={item.image} style={styles.userIcon} />
        <View style={styles.userDetailsSectionContainer}>
          <View>
            <Text style={styles.label1}>{item.name}</Text>
            <Text style={styles.label2}>{item.lastMessage}</Text>
          </View>
          <Image source={photos.checked} />
        </View>
      </View>
    );
  };
  return (
    <SwipeListView
      data={Data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={180}
      rightOpenValue={-180}
    />
  );
};

export default UserListing;
