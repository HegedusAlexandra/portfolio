import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './Gallery/Gallery';
import Experience from './Experience/Experience';
import Contact from './Contact/Contact'
import Motivation from './Motivation/Motivation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/"  element={<App />}>
      <Route path="motivation" element={<Motivation />} />
      <Route path="experience" element={<Experience />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
    </Route>      
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
