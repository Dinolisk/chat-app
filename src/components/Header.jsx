import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="navbar-home-link">Home</Link>
    </header>
  );
}

export default Header;
