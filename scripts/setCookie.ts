import { useEffect } from 'react';
import { useAppSelector } from '../src/hooks/useAppSelector';
import Cookies from 'js-cookie'; // Import the 'js-cookie' library

function SetCookie() {
  const token =  useAppSelector((state) => state.login.loginResponse.access_token)
  const user_id = useAppSelector((state) => state.login.loginResponse.user.user_id.toString());

  useEffect(() => {

    if ( user_id && token) {
      Cookies.set('user_id', user_id);
      Cookies.set('token', token) 
    } else {

      // clearCookiesOnLogout();
    }
  }, [ token, user_id]);

  return null;
}

export default SetCookie;
