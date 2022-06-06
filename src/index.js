import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Details from './screens/details/Details';
import Homefn from './screens/home/Homefn';
import BookShow from './screens/book-show/BookShow';
import Login from './screens/Login/Login';
import Signup from './screens/Login/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Homefn/>} />
        <Route exact path = "/details/:id" element = {<Details/>} />
        <Route exact path='/BookShow' element = {<BookShow/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/signup' element = {<Signup/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

