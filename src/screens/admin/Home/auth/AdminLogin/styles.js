import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../../constants';
import {getSize, width} from '../../../../../utils/reponsive';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  headerColor: {
    paddingHorizontal: 12,
  },
  showWrapper: {},
  txtShow: {
    color: COLORS.greenLight,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default styles;
