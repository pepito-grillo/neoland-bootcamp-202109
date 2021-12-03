import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import logger from './logger'
import { context } from './logic'

logger.level = process.env.REACT_APP_LOGGER_LEVEL

context.API_URL = process.env.REACT_APP_API_URL

logger.info('Starting app...')

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
