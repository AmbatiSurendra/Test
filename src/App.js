import './App.css';
import LoginPage from './components/LoginPage';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main';

function App() {
  return (
    <Provider store={store}>
     <Main/>
    </Provider>
  );
}

export default App;
