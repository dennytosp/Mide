import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, StorySlider, SearchBox,} from '../../../components';
import {styles} from './styles';
import UserListing from './UserListing';
import {photos} from '../../../assets';

const DATA = [
  {id: 0, image: photos.your_story, user: 'Your story'},
  {id: 1, image: photos.user1, user: 'Martin'},
  {id: 2, image: photos.user2, user: 'Martin'},
  {id: 3, image: photos.user3, user: 'Karen'},
  {id: 4, image: photos.user4, user: 'Martha'},
  {id: 5, image: photos.user5, user: 'Joshua'},
];

const Message = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading="Chats"
        icon1={photos.take_photo}
        icon2={photos.new_message}
      />
      <SearchBox />
      <StorySlider data={DATA} />
      <UserListing />
    </SafeAreaView>
  );
};

export default Message;
