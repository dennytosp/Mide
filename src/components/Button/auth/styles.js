import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from './../../../constants';

export const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    paddingVertical: SIZES.base * 1.5,
    borderWidth: 1.5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: SIZES.base,  
  }
});
export default styles;
