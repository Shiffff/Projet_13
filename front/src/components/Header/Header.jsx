import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setUserData } from "../../feature/user.slice";
import { accountService } from "../../services/account_service";

const Header = () => {
  const userData = useSelector((state) => state.user.user);
  const [IsLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout(e) {
    e.preventDefault();
    dispatch(setUserData({}));
    accountService.logout()
    navigate("/");    
  }

  useEffect(() => {
    if (userData.id){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [userData]);

  const handleClickProfil = (e) => {
    e.preventDefault()
    navigate("/profile");
  };

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
      {IsLogged ? (
        <div>
          <a className="main-nav-item" href="./user.html" onClick={(e) => handleClickProfil(e)}>
            <i className="fa fa-user-circle"></i>
            {userData.firstName}
          </a>
          <a className="main-nav-item" href="./index.html" onClick={(e) => logout(e)}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      ) : (
        <div>
          <Link to="./login" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
