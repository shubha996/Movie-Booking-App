import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Details from './screens/details/Details';
import Homefn from './screens/home/Homefn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homefn/>} />
        <Route exact path = "/details/:id" element = {<Details/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

