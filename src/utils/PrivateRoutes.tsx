/* eslint-disable @typescript-eslint/no-unused-vars */
import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { userAuthenticationSelector } from "../store/user/user.selector";
import ROUTES from "../routes";

const PrivateRoutes = () => {
  const isUserAuthenticated = useAppSelector(userAuthenticationSelector);
  // const auth = { token: true };
  return isUserAuthenticated ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};

export default PrivateRoutes;