import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 50,
  },
});
