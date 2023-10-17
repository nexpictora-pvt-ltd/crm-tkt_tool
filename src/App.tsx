
import {  Route, Routes } from 'react-router-dom'
import './App.css'
// import Dashboard from './pages/Dashboard/dashboard'
import SignIn from './pages/Signin/Signin'
import Dashboard from './pages/Dashboard/dashboard';
import Navigation from './routes/navigation/navigation';
import PrivateRoutes from './utils/PrivateRoutes';
import ServicePage from './pages/Service_Page/Service.page';
import Preview from './pages/Preview/preview';
import Customer from './pages/Customers/customer.page';
import Order from './pages/Oders/Orders.page';
import Profile from './pages/Profile/profile.page';

function App() {
  return (
    <>
      
      
      <Routes>
        <Route path="/" element={ <PrivateRoutes />}/>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/preview' element={<Preview></Preview>} ></Route>
          <Route path='/secure' element={<Navigation></Navigation>}>
          <Route path='dashboard' element={<Dashboard></Dashboard>} index></Route>
          <Route path='service' element={<ServicePage></ServicePage>} ></Route>
          <Route path='customer' element={<Customer></Customer>} ></Route>
          <Route path='orders' element={<Order></Order>} ></Route>
          <Route path='profile' element={<Profile></Profile>} ></Route>
          

          </Route>

    </Routes>
    

    </>
  )
}

export default App;
