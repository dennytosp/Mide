import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from './../../../constants';
import {DATA_POSTS, DATA_CONTENT} from './../../../assets/data';
import {photos} from './../../../assets/';
import styles from './styles';
import {FeedsVertical, Heading, ImagesVertical} from '../../../components';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const [showPosts, setShowPosts] = useState(true);
  const [showPhotos, setShowPhotos] = useState(false);
  const navigation = useNavigation();

  const _renderHeader = () => {
    return (
      <View>
        <Heading
          headerStyle={styles.headerColor}
          isPrimary={false}
          leftText="Setting"
          centerText="Profile"
          rightText="Sign up"
          handleOnPressLeft={() => navigation.navigate('Linking')}
          handleOnPressRight={() => navigation.navigate('AdminRegister')}
        />
      </View>
    );
  };

  const _renderInfor = () => {
    return (
      <View style={styles.imageWrapper}>
        <View
          style={{
            paddingVertical: 20,
            marginTop: 16,
          }}>
          <Pressable style={styles.borderWrapper}>
            <Image style={styles.avatar} source={photos.avatar} />
          </Pressable>
        </View>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            Dinh Tien Phong
          </Text>
          <Text style={styles.deweo}>A mantra goes here</Text>
        </View>
      </View>
    );
  };

  const _renderAction = () => {
    return (
      <View style={styles.wrapperAction}>
        <Pressable onPress={() => console.log('Posts')}>
          <View
            style={{
              backgroundColor: COLORS.white,
              ...styles.action,
            }}>
            <View style={styles.centerTips}>
              <Text
                style={{
                  color: COLORS.greenLight,
                  fontWeight: 'bold',
                }}>
                Posts
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={() => console.log('Photos')}>
          <View
            style={{
              backgroundColor: COLORS.light,
              ...styles.action,
            }}>
            <View style={styles.centerTips}>
              <Text
                style={{
                  color: COLORS.placeText,
                  fontWeight: 'bold',
                }}>
                Photos
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };

  const _renderPosts = ({item}) => {
    return (
      <View>
        <FeedsVertical
          avatar={item.image}
          titleText={item.title}
          contentText={item.content}
          timeText={item.time}
          lineTips={false}
        />
      </View>
    );
  };

  const _renderFlatPosts = () => {
    return (
      <View style={styles.footer}>
        <FlatList
          data={DATA_POSTS}
          renderItem={_renderPosts}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  };

  const _renderPhotos = ({item}) => {
    return (
      <ImagesVertical
        titleText={item.title}
        contentText={item.content}
        timeText={item.time}
      />
    );
  };

  const _renderFlatPhotos = ({item}) => {
    return (
      <View style={styles.footer}>
        <FlatList
          style={{}}
          data={DATA_CONTENT}
          renderItem={_renderPhotos}
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
        <_renderInfor />

        <_renderAction />
        <_renderFlatPosts />
        {/* <_renderFlatPhotos /> */}

        {/* {showPosts ? <_renderFlatPosts /> : _renderPhotos()}
        {showPhotos ? <_renderPhotos /> : null}

        {showPosts && _renderFlatPosts()}
        {showPhotos && _renderPhotos()} */}
      </View>
    </ScrollView>
  );
};

export default Home;
