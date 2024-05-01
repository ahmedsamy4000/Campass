import { Provider } from 'react-redux';
import './App.css';
import store from '../redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        
      </div>
    </Provider>
  );
}

export default App;
