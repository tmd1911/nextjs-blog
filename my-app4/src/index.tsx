import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppCounter from './AppCounter';
import AppClass2 from './AppClass2';
import ArrayTest from './ArrayTest';
import ArrayTest2 from './ArrayTest2';
import Interval from './Interval';
import Flow from './Flow';
import RouterWrapper from './RouterWrapper';
import AppBootstrap from './AppBootstrap';
import AppMUI from './AppMUI';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppMUI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
