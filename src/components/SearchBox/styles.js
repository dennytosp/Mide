import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.gray01,
    marginHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchIcon: {
    marginHorizontal: 10,
    width: 16,
    height: 16,
    marginRight: 5,
  },
});
