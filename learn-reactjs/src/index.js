import React from 'react';
import ReactDOM from 'react-dom/client';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo'
import Todo2 from './features/Todo2';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo2 />
  </React.StrictMode>
);

reportWebVitals();
