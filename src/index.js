import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import API from './api';

const App=()=>{
  return (
    <div>
      <h1>Index.js</h1>
      <API></API>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);