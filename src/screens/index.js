import Onboard from './auth/Onboarding';
import Splash from './auth/Splash';
import Welcome from './auth/Welcome';
import Register from './auth/Register';
import Login from './auth/Login';
import Log from './auth/Log';
import InputType from './admin/Common/Inputype';
import Products from './admin/Products';
import Users from './admin/Users';
import Homel from './client/Homel';
import Details from './client/Details';
import Message from './client/Message';
import Profile from './client/Profile';
import WishList from './client/Wishlist';

export const authen = {Onboard, Splash, Welcome, Register, Login, Log};

export const admin = {InputType, Products, Users};

export const client = {Homel, Details, Message, Profile, WishList};
