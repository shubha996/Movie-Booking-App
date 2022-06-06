import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render(props) {
    return (
      <div className='head'>
        <img id='headerLogo' src="https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg" alt="movie-bookin-app-logo" />
        <div className="buttons">
          <Link to='/BookShow'><button className='btn-header bookshow-btn'>Book Show</button></Link>
          <Link to='/login'><button className='btn-header login-btn'>Login</button></Link>
        </div>
      </div>
    )
  }
}
export default Header;
