import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.base * 2,
    position: 'relative',
  },
  rectangleWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  cardWrapper: {
    backgroundColor: COLORS.lightGray,
    width: '100%',
    borderTopStartRadius: SIZES.radius * 2,
    borderTopEndRadius: SIZES.radius * 2,
    padding: SIZES.base * 2,
  },
  txtRegister: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: SIZES.base * 2,
  },
  inputWrapper: {
    marginBottom: SIZES.base,
  },
  txtForm: {
    fontSize: 16,
    opacity: 0.5,
    marginBottom: SIZES.base,
  },
  textInput: {
    padding: SIZES.base,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingVertical: SIZES.base * 1.5,
    borderWidth: 1.5,
  },
  eyeWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  iconEye: {
    position: 'absolute',
    right: SIZES.base * 2,
    fontSize: 30,
  },
  txtForgot: {},
  btnRegister: {
    marginVertical: SIZES.base * 2,
  },
  txtBottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.base,
  },
  txtRowOneBottom: {
    fontSize: 16,
  },
  txtRowTwoBottom: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: SIZES.base,
    color: COLORS.primary,
  },
});
export default styles;
