import { Provider } from 'react-redux';

import store from '../redux/store/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';


import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import BookingPage from './Booking/bookingPage.jsx';

const Programs = lazy(() => import('../components/programs/Programs'));
const Contactpage = lazy(() => import('./contact/page/contactpage'));
const LoginPage = lazy(() => import('../Pages/LoginPage.jsx'));
const HabitationsPage=lazy(()=>import('./habitations/habitationsPage.jsx'))
const RegisterPage = lazy(() => import('../Pages/RegisterPage.jsx'));
const Home = lazy(()=>import('../Pages/Home.jsx'));
const Header = lazy(()=>import('../components/Home/Header.jsx'))
const NotFound = lazy(()=>import('../Pages/NotFound.jsx'))
const Error = lazy(()=>import('../Pages/Error.jsx'))



function App() {
  const router=createBrowserRouter([
    //{
      // path:"/",element:<Layout></Layout>,children:[
        // {index:true,element:<Home></Home> ,errorElement:<NotFound></NotFound>},
        {path:"/",element:<Header></Header>,errorElement:<NotFound></NotFound>},
        {path:"/programs",element:<Programs></Programs>,errorElement:<NotFound></NotFound>},
        {path:"/contact",element:<Contactpage></Contactpage>,errorElement:<NotFound></NotFound>},
        {path:"/signin",element:<LoginPage/>,errorElement:<NotFound></NotFound>},
        {path:"/signup",element:<RegisterPage/>,errorElement:<NotFound></NotFound>},
        {path:"/habitations",element:<HabitationsPage></HabitationsPage>},
        {path:"/booking/:id", element:<BookingPage></BookingPage>},
        {path:"*",element:<Error></Error>}
      //]
    //}
    
  ])
  return (
    <GoogleOAuthProvider clientId='715821146371-ld1t66j0b5nc63hin96603jcia3p8k5f.apps.googleusercontent.com'>
    <Provider  store={store}>
      <Suspense fallback={<NotFound></NotFound>}>

      <RouterProvider router={router}></RouterProvider>
      </Suspense>
        {/* <Programs></Programs> */}
        {/* <Contactpage></Contactpage> */}
    </Provider>
    </GoogleOAuthProvider>
  );
}

export default App;
