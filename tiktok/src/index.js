import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gift from './Gift';
import Radio from './Radio'
import Checkbox from './Checkbox'
import Todolist from './Todolist';
import Todolist2 from './Todolist2'
import Mount from './Mount'
import Getapi from './Getapi'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gift /> */}
    {/* <Radio /> */}
    {/* <Checkbox /> */}
    {/* <Todolist /> */}
    {/* <Todolist2 /> */}
    {/* <Mount /> */}
    <Getapi />
  </React.StrictMode>
);

reportWebVitals();
