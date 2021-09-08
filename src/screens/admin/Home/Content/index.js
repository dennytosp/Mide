import React from 'react';
import {View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import styles from './styles';
import {DATA_CONTENT} from '../../../../assets/data';
import {useNavigation} from '@react-navigation/core';
import {Heading, ImagesVertical, Searching} from '../../../../components';

const Content = () => {
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={true}
          leftText="Back"
          centerText="Content"
          rightText="Filter"
          handleOnPressLeft={() => navigation.goBack()}
        />
      </View>
    );
  };

  const _renderSearch = () => {
    return (
      <View>
        <Searching placeHolder="Search inside content..." />
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
          handleOnPressImage={() => navigation.navigate('Deti')}
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
        <_renderFlatImagesVertical />
      </View>
    </ScrollView>
  );
};

export default Content;
