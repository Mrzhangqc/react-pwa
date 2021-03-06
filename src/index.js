import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as serviceWorkerRegistration from './pwa/serviceWorkerRegistration';
// import reportWebVitals from './pwa/reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    console.log('准备更新');
    document.dispatchEvent(
      new CustomEvent('swUpdated', { detail: registration })
    )
  }
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();