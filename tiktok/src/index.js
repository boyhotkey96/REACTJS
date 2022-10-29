import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import DemoReactRouter from './DemoReactRouter';
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
    {/* <ControllVideo /> */}
    {/* <DemoCssModule /> */}
    {/* <DemoClsx /> */}
    <BrowserRouter>
      <DemoReactRouter />
    </BrowserRouter>
  </React.Fragment>
);

reportWebVitals();