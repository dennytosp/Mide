import React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import {DATA_POSTS, DATA_CONTENT} from './../../../../assets/data';
import {useNavigation} from '@react-navigation/core';
import {
  FeedsVertical,
  Heading,
  ImagesVertical,
  Searching,
} from '../../../../components';

const Linking = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          leftText="Back"
          centerText="Feed"
          rightText="Content"
          handleOnPressRight={() => navigation.navigate('Content')}
          handleOnPressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderSearch = () => {
    return (
      <View>
        <Searching placeHolder="Search inside feed..." />
      </View>
    );
  };

  const _renderFeedsVertical = ({item}) => {
    return (
      <View>
        <FeedsVertical
          avatar={item.image}
          titleText={item.title}
          contentText={item.content}
          timeText={item.time}
          lineTips={true}
        />
      </View>
    );
  };

  const _renderFlatFeedsVertical = ({item}) => {
    return (
      <View style={styles.footer}>
        <FlatList
          style={{}}
          data={DATA_POSTS}
          renderItem={_renderFeedsVertical}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const _renderImagesVertical = ({item}) => {
    return (
      <View>
        <ImagesVertical
          titleText={item.title}
          contentText={item.content}
          timeText={item.time}
        />
      </View>
    );
  };

  const _renderFlatImagesVertical = ({item}) => {
    return (
      <View style={styles.footer}>
        <FlatList
          style={{}}
          data={DATA_CONTENT}
          renderItem={_renderImagesVertical}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}>
      <SafeAreaView style={styles.wrapperContainer}>
        <_renderHeader />
      </SafeAreaView>

      <View>
        <_renderSearch />
        <_renderFlatFeedsVertical />
        <_renderFlatImagesVertical />
      </View>
    </ScrollView>
  );
};

export default Linking;
