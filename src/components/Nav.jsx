import React from 'react';
import Logo from '../img/clima.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';




function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/' className='link'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          <h2 className='titulo'> CLIMA </h2>
        </span>
      </Link>
      <div> 
        <SearchBar
          onSearch={onSearch}
      />
      </div>  
    </nav>
  );
};

export default Nav;

