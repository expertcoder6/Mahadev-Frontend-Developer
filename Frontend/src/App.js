import { Provider } from 'react-redux';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
