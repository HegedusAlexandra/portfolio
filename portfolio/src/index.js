import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Motivation from "./components/Motivation/Motivation"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<App />} />
      <Route path="motivation" element={<Motivation />} />
      <Route path="experience" element={<Experience />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />          
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
