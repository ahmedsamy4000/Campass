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
import SimpleBackdrop from '../components/spinner.jsx';
import AuthProtected from '../components/Guards/AuthProtected.jsx'
import Cities from '../components/Cities/Cities.jsx';

const Programs = lazy(() => import('../components/programs/Programs'));
const Contactpage = lazy(() => import('./contact/page/contactpage'));
const LoginPage = lazy(() => import('../Pages/LoginPage.jsx'));
const HabitationsPage=lazy(()=>import('./habitations/habitationsPage.jsx'))
const RegisterPage = lazy(() => import('../Pages/RegisterPage.jsx'));
const Home = lazy(()=>import('../Pages/Home.jsx'));
const ProgramsAnalysisPage = lazy(()=> import('../Pages/programsAnalysisPage.jsx'));
const CompanyPage = lazy(() => import('../Pages/CompanyPage.jsx'));
const AboutUs = lazy(() => import('../Pages/AboutUs.jsx'));
const Feedback = lazy(()=>import('../components/Feedbacks/Feedbacks.jsx'));
const Layout = lazy(()=>import('../components/Home/Layout.jsx'));
const Countries = lazy(()=>import('../components/Countries/Countries.jsx'));
const ReservationsPage = lazy(()=>import('../Pages/ReservationsPage.jsx'));

const NotFound = lazy(()=>import('../Pages/NotFound.jsx'))
const Error = lazy(()=>import('../Pages/Error.jsx'))


function App() {
  const router=createBrowserRouter([
    //{
      // path:"/",element:<Layout></Layout>,children:[
        // {index:true,element:<Home></Home> ,errorElement:<NotFound></NotFound>},
        {path:"/",element:<Layout></Layout>,errorElement:<NotFound></NotFound>, children:[
          {index:true, element:<Home></Home>},
          {path:"/programs",element:<Programs></Programs>,errorElement:<NotFound></NotFound>},
          {path:"/contact",element:<Contactpage></Contactpage>,errorElement:<NotFound></NotFound>},
          {path:"/habitations",element:<HabitationsPage></HabitationsPage>},
          {path:"/booking/:id", element:<BookingPage></BookingPage>},
          {path:"/feedbacks", element:<Feedback></Feedback>},
          {path:"/countries", element:<Countries></Countries>},
          {path:"/countries/:countryId", element:<Cities></Cities>},

          { path: "/about", element: <AboutUs></AboutUs>, errorElement: <NotFound></NotFound> },
          { path: "/reservations", element: <ReservationsPage></ReservationsPage>, errorElement: <NotFound></NotFound> },
        ]},
        { path: "/signin", element: <AuthProtected><LoginPage /></AuthProtected>, errorElement: <NotFound></NotFound> },
        { path: "/signup", element: <AuthProtected><RegisterPage /></AuthProtected>, errorElement: <NotFound></NotFound> },
        {path:"/habitations",element:<HabitationsPage></HabitationsPage>},
        {path:"/booking/:id", element:<BookingPage></BookingPage>},       
        {path:"/analysis", element:<ProgramsAnalysisPage></ProgramsAnalysisPage>},
        { path: "/company/programs", element: <CompanyPage></CompanyPage>, errorElement: <NotFound></NotFound> },
        {path:"*",element:<Error></Error>}
      //]
    //}
    
  ])
  return (
    <Suspense fallback={<SimpleBackdrop />}>
    <GoogleOAuthProvider clientId='715821146371-ld1t66j0b5nc63hin96603jcia3p8k5f.apps.googleusercontent.com'>
      <Provider store={store}>

        <RouterProvider router={router}></RouterProvider>

        {/* <Programs></Programs> */}
        {/* <Contactpage></Contactpage> */}
      </Provider>
    </GoogleOAuthProvider>
  </Suspense>
  );
}

export default App;
