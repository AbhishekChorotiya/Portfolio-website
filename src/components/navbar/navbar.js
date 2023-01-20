import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  return (
    <nav>
      <div className="container">
        <img src="logo.png" alt="Logo" className="logo" />
        <button className="toggle-button" onClick={toggleNavbar}>
          {''}
        </button>
        <ul className={collapsed ? '' : 'open'}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
