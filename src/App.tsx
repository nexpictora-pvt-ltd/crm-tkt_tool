import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/Signin/Signin";
import Dashboard from "./pages/Dashboard/dashboard";
import Navigation from "./routes/navigation/navigation";
import PrivateRoutes from "./utils/PrivateRoutes";
import ServicePage from "./pages/Service/Service.page";
import Preview from "./pages/Preview/preview";
import Customer from "./pages/Customers/customer.page";
import AuthLayout from "./routes/auth/authLayout";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/profile.page";
import Order from "./pages/Oders/Orders.page";
import { Data } from "./pages/Data/Data";
import { Setting } from "./pages/Settings/Setting";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/secure" element={<Navigation />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="customer" element={<Customer />} />
        <Route path ="profile" element={<Profile/>}/>
        <Route path ="orders" element={<Order/>} />
        <Route path="data" element={<Data/>} />
        <Route path="settings" element={<Setting/>} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}
