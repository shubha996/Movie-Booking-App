import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Details from './screens/details/Details';
// import Home from './screens/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home/> */}
    <Details/>
  </React.StrictMode>
);

