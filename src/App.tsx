import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/dashboard";
import Navigation from "./routes/navigation/navigation";
import PrivateRoutes from "./utils/PrivateRoutes";
import ServicePage from "./pages/Service/Service.page";
import Preview from "./pages/Preview/preview";
import AuthLayout from "./routes/auth/authLayout";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/profile.page";
import Order from "./pages/Oders/Orders.page";
import { Data } from "./pages/Data/Data";
import  Settings  from "./pages/Settings/Setting";
import CustomerTable from "./components/Table/customer.table";
import {   ThemeProvider } from "./pages/Settings/themeContext";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { setIsUserAuthenticated } from "./store/user/user.reducer";


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hasToken = Cookies.get('token') !== undefined;
    const hasUserId = Cookies.get('user_id') !== undefined;

    if (hasToken && hasUserId) {
      dispatch(setIsUserAuthenticated(true));
    }
  }, [dispatch]);
  
  return (
    <>
    <ThemeProvider >
    <Routes>
      <Route path="/" element={<PrivateRoutes />} >
      <Route path="/secure" element={<Navigation />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="preview" element={<Preview />} />
        <Route path="customer" element={<CustomerTable />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Order />} />
        <Route path="data" element={<Data />} />
        <Route path="settings" element={<Settings />} /> 
        </Route>
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </ThemeProvider>
    </>
  );
}
