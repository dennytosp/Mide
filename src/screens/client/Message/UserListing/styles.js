import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

export const styles = StyleSheet.create({
  container: {},
  userItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  userIcon: {
    width: 60,
    height: 60,
    flex: 1,
  },
  userDetailsSectionContainer: {
    marginLeft: 15,
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'space-between',
  },
  label1: {
    color: COLORS.dark,
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 22,
  },
  label2: {
    color: COLORS.dark,
    opacity: 0.5,
    fontWeight: '400',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  itemRowWrapper: {
    flexDirection: 'row',
  },
  itemRowIcon: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
  },
});
