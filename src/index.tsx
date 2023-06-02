import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './docs/ui/common/common.css';
import './docs/ui/style/icons.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

console.log("React v.", React.version);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
