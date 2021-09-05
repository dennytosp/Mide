import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.backgroundHome,
    paddingTop: 50,
  },
  header: {
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  drawerMenu: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  rowWrapperSearchFilter: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  rowling: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchBar: {
    height: 50,
    width: '75%',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  iconEvent: {
    height: 40,
    width: 40,
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  verticalViewContainer: {
    height: 130,
    width: '100%',
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    marginTop: 15,
    borderRadius: 14,
    flexDirection: 'row',
  },
  verticalWrapper: {
    height: 130,
    width: 130,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageVerticalView: {
    height: 100,
    width: 90,
  },
  descriptionVertiWrapper: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  txtTitleVerti: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconStarVertiWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  txtPriceVerti: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconFavorite: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  viewBestSelling: {
    paddingHorizontal: 15,
  },
  txtBestSelling: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewHorizontalFlatlist: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  viewVerticalFlatlist: {
    paddingHorizontal: 15,
    marginBottom: 50,
  },
  txtPopular: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;
