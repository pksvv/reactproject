import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import API from './api';
import SubmitForm from './submit';
//import App from './App';

const App = () => {
  return(
    <div>
      <h1>React App</h1>
      <h2>Next Heading</h2>
      <API></API>
      <SubmitForm></SubmitForm>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);