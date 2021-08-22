import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {COLORS} from '../../constants';
import { photos } from './../../assets';
import {styles} from './styles';

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.searchIcon} source={photos.search} />
        <TextInput placeholderTextColor={COLORS.gray02} placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBox;
