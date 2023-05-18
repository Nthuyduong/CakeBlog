import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.scss';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import reportWebVitals from './reportWebVitals';
import './font.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
