import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {getSize} from '../../../utils/reponsive';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flex: 0,
    marginBottom: 20,
  },
  listImageOfAction: {
    width: getSize.s(60),
    height: getSize.s(60),
  },
  betweenTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  txtTime: {
    fontSize: 13,
    color: COLORS.placeText,
  },
  txtContent: {
    fontSize: 14,
  },
  lineTips: {
    backgroundColor: COLORS.placeBg,
    marginTop: 16,
    height: 0.75,
  },
});
export default styles;
