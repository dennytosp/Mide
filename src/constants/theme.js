import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#83B4EC',
  // #5E91DB #1572DF
  tealGreen: '#128C7E',
  Green: '#075E54',
  prabo: '#9863EC',
  black: '#322F3B',
  white: '#FFFFFF',
  lightGray: '#EFEEEF',
  transparent: 'transparent',
  background: '#FFFFFF',

  //Oboard
  gray: '#666666',
  blueOnboard: '#1C215D',
  blueFaded: '#8D8FAD',

  accent: '#FF7363',
  purple: '#694fad',
  botClick: '#171717',
  gray01: 'rgba(0, 0, 0, 0.05)',
  gray02: '#8E8E93',

  dark: '#000',
  light: '#f6f6f6',
  grey: '#A9A9A9',
  blue: '#5f82e6',
  yellow: '#FFD700',
  outline: '#52575d',
  holderText: '#DCDCDC',
  holverTab: '#787FF6',
  backgroundHome: '#F8F8F8',

  blueCollect: '#1CA7EC',
  blueTion: '#4ADEDE',
  red: '#BE2623',
  
  bgProduct1: '#B89962',
  bgProduct2: '#3F4855',
  bgProduct3: '#A7DACB',
  bgProduct4: '#A84F50',
  bgProduct5: '#7F886A',
  bgProduct6: '#485550',

};
export const SIZES = {
  base: 10,
  radius: 20,
  width,
  height,
};
const theme = {COLORS, SIZES};
export default theme;
