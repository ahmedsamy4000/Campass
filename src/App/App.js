import { Provider } from 'react-redux';

import store from '../redux/store/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Programs from '../components/programs/Programs';
import Contactpage from './contact/page/contactpage';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NotFound from '../Pages/NotFound.jsx';
import Error from '../Pages/Error.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Header from '../components/Home/Header.jsx';

function App() {
  const router=createBrowserRouter([
    //{
      
      // path:"/",element:<Layout></Layout>,children:[
        // {index:true,element:<Home></Home> ,errorElement:<NotFound></NotFound>},
        {path:"/",element:<Header></Header>,errorElement:<NotFound></NotFound>},
        {path:"/programs",element:<Programs></Programs>,errorElement:<NotFound></NotFound>},
        {path:"/contact",element:<Contactpage></Contactpage>,errorElement:<NotFound></NotFound>},
        {path:"*",element:<Error></Error>}
      //]
    //}
    
  ])
  return (
    <Provider  store={store}>
        
        <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
