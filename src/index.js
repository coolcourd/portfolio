import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Loader from './Components/Loader'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render((
  <Loader/>
), document.getElementById('root'))

  ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
