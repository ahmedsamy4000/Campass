import { Provider } from 'react-redux';
import './App.css';
import store from '../redux/store/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Programs from '../components/programs/Programs';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Programs></Programs>
      </div>
    </Provider>
  );
}

export default App;
