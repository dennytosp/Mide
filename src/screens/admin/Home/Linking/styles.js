import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';
import {getSize} from '../../../../utils/reponsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  wrapperContainer: {
  },
  headerColor: {
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerWrapper: {},
  txtNormal: {
    fontSize: 16,
  },
  footer: {
    paddingHorizontal: 12,
  },
});
export default styles;
