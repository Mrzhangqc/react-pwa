import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ConfigProvider } from 'antd';

import ServiceWorkerUpdatePopup from './pwa/components/ServiceWorkerUpdatePopup.jsx'

function App() {
  return (
    <ConfigProvider>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>更新了1</p>
          <p>更新了2</p>
          <p>更新了2</p>
          <p>更新了2</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <footer><ServiceWorkerUpdatePopup /></footer>
      </div>
    </ConfigProvider>
  );
}

export default App;
