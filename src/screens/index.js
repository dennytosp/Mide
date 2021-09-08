import Onboard from './auth/Onboarding';
import Splash from './auth/Splash';
import Welcome from './auth/Welcome';
import Register from './auth/Register';
import Login from './auth/Login';
import Log from './auth/Log';
import InputType from './admin/Common/Inputype';
import Home from './admin/Home';
import Products from './admin/Products';
import Favorite from './admin/Favorite';
import Users from './admin/Users';
import Personal from './admin/Personal';
import Homel from './client/Homel';
import Details from './client/Details';
import Message from './client/Message';
import Profile from './client/Profile';
import WishList from './client/Wishlist';

import Linking from './admin/Home/Linking';
import Content from './admin/Home/Content';
import Deti from './admin/Home/Deti';
import AdminLogin from './admin/Home/auth/AdminLogin';
import AdminRegister from './admin/Home/auth/AdminRegister';

export const authen = {Onboard, Splash, Welcome, Register, Login, Log};

export const admin = {InputType, Home, Products, Favorite, Users, Personal, Linking, Content, Deti, AdminLogin, AdminRegister};

export const client = {Homel, Details, Message, Profile, WishList};
