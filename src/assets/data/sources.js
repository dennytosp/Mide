import {COLORS} from '../../constants';
import {headset, photos, thumbnail} from '../../assets';

export const horizontalfaltlist = [
  {
    id: '1',
    title: 'JK 850 Beats',
    image: headset.boat_black,
    bg_color: COLORS.bgProduct6,
    price: '$325',
  },
  {
    id: '2',
    title: '80 Elite 201',
    image: headset.jpl_white,
    bg_color: COLORS.bgProduct2,
    price: '$200',
  },
  {
    id: '3',
    title: 'BM 050 Beats',
    image: headset.boat_cream,
    bg_color: COLORS.bgProduct3,
    price: '$320',
  },
  {
    id: '4',
    title: 'Blaze L23',
    image: headset.jpl_black,
    bg_color: COLORS.bgProduct4,
    price: '$345',
  },
];
export const verticalFlatList = [
  {
    id: '1',
    title: 'BM 050 Beats',
    image: headset.rockerz_black,
    bg_color: COLORS.bgProduct3,
    price: '$320',
  },
  {
    id: '2',
    title: 'Blaze L23',
    image: headset.boat_cream,
    bg_color: COLORS.bgProduct4,
    price: '$345',
  },
  {
    id: '3',
    title: 'JK 850 Beats',
    image: headset.jpl_blue,
    bg_color: COLORS.bgProduct1,
    price: '$325',
  },
  {
    id: '4',
    title: '80 Elite 201',
    image: headset.rockerz_white,
    bg_color: COLORS.bgProduct2,
    price: '$200',
  },
];

export const wishListVertical = [
  {
    id: '1',
    title: 'BM 050 Beats',
    image: headset.jpl_black,
    bg_color: COLORS.bgProduct4,
    price: '$355',
  },
  {
    id: '2',
    title: 'Blaze L23',
    image: headset.jpl_blue,
    bg_color: COLORS.bgProduct3,
    price: '$375',
  },
  {
    id: '3',
    title: 'JK 850 Beats',
    image: headset.jpl_white,
    bg_color: COLORS.bgProduct2,
    price: '$385',
  },
  {
    id: '4',
    title: '80 Elite 201',
    image: headset.rockerz_white,
    bg_color: COLORS.bgProduct1,
    price: '$395',
  },
];

export const ONBOARD_DATA = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: photos.onboard1,
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: photos.onboard2,
  },
  {
    title: 'Spend more time doing the things you love',
    text: 'Get started within five minutes',
    image: photos.onboard3,
  },
];

export const DATA_POSTS = [
  {
    id: '1',
    image: photos.user1,
    title: 'Headshet',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '2',
    image: photos.user2,
    title: 'Homing',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '3',
    image: photos.user5,
    title: 'Vlog',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '4',
    image: photos.user4,
    title: 'Blogger',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
];

export const DATA_CONTENT = [
  {
    id: '1',
    image: photos.user5,
    title: 'Heading',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '2',
    image: photos.user1,
    title: 'Linking',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '3',
    image: photos.user2,
    title: 'Ting ting',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
  {
    id: '4',
    image: photos.user4,
    title: 'Floating',
    content:
      'He will want to use your yacht, and I do not want this thing smelling like fish.',
    time: '8m ago',
  },
];

const sources = {
  horizontalfaltlist,
  verticalFlatList,
  wishListVertical,
  ONBOARD_DATA,
  DATA_POSTS,
  DATA_CONTENT,
};
export default sources;
