import React from "react";
import "./header.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <nav className="main-nav">
    <Link to="./" className="main-nav-logo">
      <img
        className="main-nav-logo-image"
        src="./img/argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      <Link to="./login" className="main-nav-item" >
      <FontAwesomeIcon icon={faUserCircle} />
        Sign In
      </Link>
    </div>
  </nav>
  );
};

export default Header;
