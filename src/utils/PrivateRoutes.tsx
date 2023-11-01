import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { userAuthenticationSelector } from "../store/user/user.selector";
import ROUTES from "../routes";
import Cookies from 'js-cookie';

const PrivateRoutes = () => {
  const isUserAuthenticated = useAppSelector(userAuthenticationSelector);

  // Check if the user is already authenticated
  if (isUserAuthenticated) {
    return <Outlet />;
  }

  // If the user is not authenticated, check if the 'token' and 'user_id' cookies exist
  if (Cookies.get('token') == null || Cookies.get('user_id') == null) {
    return <Navigate to={ROUTES.SIGN_IN} />;
  }

  return <Outlet />;
};

export default PrivateRoutes;
