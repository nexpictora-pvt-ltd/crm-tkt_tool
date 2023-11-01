import Cookies from 'js-cookie';

export const removeCookies = () => {
  Cookies.remove('token');
  Cookies.remove('user_id');
};

