import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prop from './Prop';
import Baitap1 from './Baitap1';
import Baitap2 from './Baitap2';
import Form from './Form';

ReactDOM.render(
  <React.StrictMode>
    <Baitap2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
