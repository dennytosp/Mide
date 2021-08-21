import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {},

  imageHeaderView: {
    height: '50%',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  backBtnView: {
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: '#414956',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    shadowColor: COLORS.dark,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  imageViewHeadset: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSizeHeadset: {
    width: 260,
    height: 300,
  },
  contentWrapper: {
    height: '50%',
    backgroundColor: '#482E55',
  },
  headsetDescWrapper: {
    height: 350,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  txtTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconStarWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  optionViewRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: 30,
    top: 25,
  },
  txtDescription: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 24,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 25,
  },
  txtPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  buttonWrapper: {
    height: 50,
    width: 120,
    backgroundColor: '#D16Eff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    color: COLORS.white,
  }
});

export default styles;
