import {StyleSheet} from 'react-native';
import {getSize} from '../../../utils/reponsive';
import {COLORS} from './../../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  wrapperContainer: {
  },
  headerColor: {
    backgroundColor: COLORS.greenLight,
    height: 240,
    paddingHorizontal: 12,
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -165,
  },
  borderWrapper: {
    alignSelf: 'center',
    width: 170,
    height: 170,
    shadowColor: '#000',
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 11,
    borderRadius: 170 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    height: 160,
    width: 160,
    borderRadius: 160 / 2,
  },
  deweo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperAction: {
    flexDirection: 'row',
    paddingVertical: 36,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  action: {
    width: 215,
    height: 50,
    borderRadius: 70,
    justifyContent: 'center',
    marginHorizontal: -20,
    alignItems: 'center',
    borderColor: COLORS.placeBg,
    borderWidth: 1,
  },
  centerTips: {
    alignItems: 'center',
    justifyContent: 'center',
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

  wrapperImage: {
    backgroundColor: COLORS.light,
    height: 250,
    borderRadius: 10,
    marginBottom: 8,
  },
  footer: {
    paddingHorizontal: 12,
  },
});
export default styles;
