import {icons} from '../../assets';
import {useNavigation} from '@react-navigation/core';
import {useIsFocused} from '@react-navigation/native';
import {getSize} from '../../utils/reponsive';
import React, {useState} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StatusBar,
  View,
  Text,
  ColorPropType,
} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  if (props.type === 'Home') {
    return <HeaderHome {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderHome = ({scroll}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const config = useSelector(state => state.config?.data);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const HEADER_MAX_HEIGHT = getSize.m(200);
  const HEADER_MIN_HEIGHT = getSize.m(60);
  const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
  const [dark, setDark] = useState(true);

  scroll.addListener(({value}) => {
    if (value >= 60 && dark) {
      setDark(false);
    }
    if (value < 60 && !dark) {
      setDark(true);
    }
  });

  const backgroundColor = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [config?.backgroundcolor || COLORS.greenLight, COLORS.white],
    extrapolate: 'clamp',
  });

  const backgroundColorbox = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [COLORS.white, COLORS.smoke],
    extrapolate: 'clamp',
  });
  const colortext = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [
      COLORS.placeholder,
      config?.backgroundcolor || COLORS.greenLight,
    ],
    extrapolate: 'clamp',
  });

  const colorimg = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [COLORS.white, config?.backgroundcolor || COLORS.greenLight],
    extrapolate: 'clamp',
  });
  const backgroundsmoke = scroll.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [config?.backgroundcolor || COLORS.greenLight, COLORS.smoke],
    extrapolate: 'clamp',
  });
  const isStatus = dark ? 'light-content' : 'dark-content';

  return (
    <View>
      <AnimatedStatusBar animated={true} translucent barStyle={isStatus} />
      <Animated.View
        style={{
          ...styles.container(top, backgroundColor),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
            justifyContent: 'space-between',
          }}>
          <AnimatedPressable
            // onPress={() => navigation.navigate(routes.SEARCHSCREEN)}
            style={styles.box(backgroundColorbox)}>
            <Image
              source={icons.searching}
              style={styles.iconSearch}
              resizeMode="contain"
            />
            <Animated.Text
              allowFontScaling={false}
              style={{marginLeft: getSize.s(5), color: colortext}}>
              Bạn tìm gì hôm nay?
            </Animated.Text>
          </AnimatedPressable>

          <Cart colorimg={colorimg} />
        </View>
      </Animated.View>

      <Animated.View style={styles.backgroundColorsmoke(backgroundsmoke)} />
    </View>
  );
};

const HeaderCommon = ({canGoBack, title, checkBackground}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 3,
        paddingTop: top + 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        
        backgroundColor: checkBackground
          ? COLORS.white
          :COLORS.greenLight,...styles.border
      }}>
      {isFocused && <StatusBar barStyle="dark-content" translucent animated />}
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} />
        </Pressable>
      )}
      {title && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: checkBackground ? COLORS.black : COLORS.white,
              fontSize: 18,
            }}
            numberOfLines={2}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

const Cart = ({colorimg}) => {
  const navigation = useNavigation();
  return (
    <Pressable
    // onPress={() => navigation.navigate(routes.CARTSCREENS)}
    >
      <View style={{marginHorizontal: 10}}>
        <Badge
          status="warning"
          value="1"
          containerStyle={styles.containerStyle}
          textProps={{allowFontScaling: false}}
        />
        <Animated.Image
          source={icons.cart}
          style={{...styles.iconcard, tintColor: colorimg}}
          resizeMode="contain"
        />
      </View>
    </Pressable>
  );
};

export default Header;
