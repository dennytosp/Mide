import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  wrapperImage: {
    backgroundColor: COLORS.light,
    height: 250,
    borderRadius: 10,
    marginBottom: 8,
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
    paddingVertical: 8,
  },
  txtTitleDetails: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '600',
  },
  txtAuthor: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 16,
  },
  txtContentDetails: {
    fontSize: 14,
    color: COLORS.black,
    lineHeight: 22,
  },
});
export default styles;
