import React from 'react';
import ReactDOM from 'react-dom/client';
import DemoContext from './DemoContext';
import ThemeProvider from './DemoContext/ThemeProvider';
import Demo2Context from './Demo2Context'
import ThemeProvider2 from './Demo2Context/ThemeProvider'
import DemoReducer from './DemoReducer'
import ContextReducer from './ContextReducer'
import Provider from './ContextReducer/store/provider'
import TodolistContextReducer from './TodolistContextReducer';
import TodolistProvider from './TodolistContextReducer/store/TodolistProvider';
import ControllVideo from './ControllVideo';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <App /> */}
    {/* <Gift /> */}
    {/* <Radio /> */}
    {/* <Checkbox /> */}
    {/* <Todolist /> */}
    {/* <Todolist2 /> */}
    {/* <Mount /> */}
    {/* <Getapi /> */}
    {/* <Countdown /> */}
    {/* <Imagepreview /> */}
    {/* <Fetchapi /> */}
    {/* <Imagepreview2 /> */}
    {/* <Countdownplus /> */}
    {/* <CountdownUseref /> */}
    {/* <CartUseMemo /> */}
    {/* <CountuseReducer /> */}
    {/* <TodolistusingReducer /> */}
    {/* <TodolistLocalstorage /> */}
    {/* <DemoReducer /> */}
   {/* <ThemeProvider> 
      <DemoContext />
    </ThemeProvider> */}
    {/* <ThemeProvider2>
      <Demo2Context />
    </ThemeProvider2> */}
    {/* <Provider>
      <ContextReducer />
    </Provider> */}
   {/* <TodolistProvider>
		<TodolistContextReducer />
   </TodolistProvider> */}
   <ControllVideo />
  </React.Fragment>
);

reportWebVitals();
