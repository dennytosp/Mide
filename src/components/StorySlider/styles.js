import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  userName: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.gray02,
  },
  userIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
});
