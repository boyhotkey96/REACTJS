import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Todo2 from './features/Todo2';
import TodoRender from './features/TodoRender';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoRender />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
