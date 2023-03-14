import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store as storePhoto } from './app/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store as storeRandom } from './store/store';

const stores = {
  storeRedux: storeRandom,
  storeReduxToolkit: storePhoto,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    {/* <Provider store={stores.storeRedux}> */}
    <Provider store={stores.storeReduxToolkit}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
