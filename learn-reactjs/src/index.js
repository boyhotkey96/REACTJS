import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Todo2 from './features/Todo2';
import TodoFeature from './features/Todo';
import ColorBox from './features/ColorBox';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoFeature />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
