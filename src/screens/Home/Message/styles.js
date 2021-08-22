import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 0,
  },
});
