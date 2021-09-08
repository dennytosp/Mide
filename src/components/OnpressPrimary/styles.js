import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

export const styles = StyleSheet.create({
  wrapperFooter: {
    alignItems: 'center',
  },
  wrapperButton: {
    backgroundColor: COLORS.greenLight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.base * 1.5,
    marginVertical: SIZES.base,
    borderRadius: 60,
  },
  txtButton: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtForgot: {
    color: COLORS.greenLight,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default styles;
