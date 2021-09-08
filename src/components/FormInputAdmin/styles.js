import {StyleSheet} from 'react-native';
import {getSize} from '../../utils/reponsive';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  wrapperInput: {
    backgroundColor: COLORS.light,
    height: getSize.v(50),
    borderColor: COLORS.background,
    paddingHorizontal: 20,
    fontSize: 15,
    color: COLORS.botClick,
    borderColor: COLORS.placeBg,
    borderWidth: 0.5,
  },
});
export default styles;
