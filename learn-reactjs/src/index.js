import React from 'react';
import ReactDOM from 'react-dom/client';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoFeature />
  </React.StrictMode>
);

reportWebVitals();
