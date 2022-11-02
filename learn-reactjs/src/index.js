import React from 'react';
import ReactDOM from 'react-dom/client';
import AlbumFeature from './features/Album';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlbumFeature />
  </React.StrictMode>
);

reportWebVitals();
