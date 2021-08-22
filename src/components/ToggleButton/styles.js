import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btn: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
  },
  btnLabelActicve: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.dark,
    textTransform: 'uppercase',
  },
  btnLabelInacticve: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.gray02,
    textTransform: 'uppercase',
  },
});
