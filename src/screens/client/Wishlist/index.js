import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, SIZES} from '../../../constants';
import {wishListVertical} from '../../../assets/data';
import {headset, photos} from '../../../assets';
import styles from './styles';

const Wishlist = ({navigation}) => {
  const [like, setLike] = useState(false);

  const Liking = () => {
    setLike(!like);
  };

  const verticalRenderItem = ({item}) => {
    return (
      <View style={styles.verticalViewContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {details: item})}>
          <View
            style={{
              backgroundColor: item.bg_color,
              ...styles.verticalWrapper,
            }}>
            <Image source={item.image} style={styles.imageVerticalView} />
          </View>
        </TouchableOpacity>
        <View style={styles.descriptionVertiWrapper}>
          <Text style={styles.txtTitleVerti}>{item.title}</Text>
          <View style={styles.iconStarVertiWrapper}>
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star" color={COLORS.yellow} size={18} />
            <Ionicon name="star-half" color={COLORS.yellow} size={18} />
            <Ionicon name="star-outline" color={COLORS.yellow} size={18} />
          </View>
          <Text style={styles.txtPriceVerti}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.iconFavorite} onPress={() => Liking()}>
          <Ionicon
            name={like ? 'heart-outline' : 'heart'}
            color={like ? COLORS.outline : COLORS.red}
            size={22}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.drawerMenu}>
          <Feather name="menu" size={20} />
        </View>
        <View style={styles.drawerMenu}>
          {/* <Feather name="bell" size={20} /> */}
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={photos.avatar}
              style={{
                width: 50,
                height: 50,
                borderRadius: SIZES.base * 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowWrapperSearchFilter}>
        <View style={styles.searchBar}>
          <View style={styles.rowling}>
            <Feather
              name="search"
              style={{color: COLORS.holderText}}
              size={22}
            />
            <TextInput placeholder="Search products..." />
          </View>
        </View>
        <View
          style={[
            styles.searchBar,
            {width: '18%', marginHorizontal: 25, alignItems: 'center'},
          ]}>
          <Feather name="filter" size={22} />
        </View>
      </View>
      <View style={styles.viewVerticalFlatlist}>
        <Text style={styles.txtPopular}>Wishlist</Text>
        <FlatList
          style={{paddingBottom: 20}}
          data={wishListVertical}
          showsVerticalS
          crollIndicator={false}
          renderItem={verticalRenderItem}
        />
      </View>
    </ScrollView>
  );
};
export default Wishlist;
