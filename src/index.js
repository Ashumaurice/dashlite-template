import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';
import ContactForm from './components/ContactForm';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactForm />} />
          
        </Routes>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
