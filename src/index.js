import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
axios.interceptors.request.use(config=>{
    config.url="http://127.0.0.1"+config.url;
    return config
});
axios.interceptors.response.use(({data})=>{
    console.log("wangnan")
    return data
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
