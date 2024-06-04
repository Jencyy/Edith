import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

library.add(faPencilAlt, faGraduationCap, faBook);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    
    </BrowserRouter>
  </React.StrictMode>,
)
