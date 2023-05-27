import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { accountService } from "../../services/account_service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    accountService
    .login(user)
    .then((res) => {
      accountService.saveToken(res.data.body.token);  
      navigate("/profile");    
})
    .catch((err) => {
      console.log(err)
    })
  }



    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleCheckSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="email">email</label
              ><input
            type="text"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => handleChange(e)}
          />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label
              >
              <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={user.password}
            onChange={(e) => handleChange(e)}
          />

            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
                >Remember me</label
              >
            </div>
            <button className="sign-in-button">Sign In</button> 
          </form>
        </section>
      </main>
  
    )
}

export default Login;