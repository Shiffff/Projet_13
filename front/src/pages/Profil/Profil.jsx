import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { userService } from '../../services/user.service';
import { setUserData, setUpdateUserData } from "../../feature/user.slice";
import "./profil.css"



const Profil = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  const [handleForm, setHandleForm] = useState(false)
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    userService.putUser(user)
    .then((res) =>{
      dispatch(setUpdateUserData(user));
      setHandleForm(false)

    })

  }
  useEffect(() => {
    userService.getUser()
    .then((res) => {
      dispatch(setUserData(res.data.body));

    })
    
  }, []);


    return (
        <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userData.firstName + " " + userData.lastName + "!"}</h1>
          <button className="edit-button" onClick={() => setHandleForm(!handleForm)}>Edit Name</button>
          {handleForm ? (
                      <form onSubmit={(e) => handleCheckSubmit(e)}>
                      <div className="input-wrapper">
                        <label htmlFor="firstName">New firstName</label
                        ><input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={user.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                      </div>
                      <div className="input-wrapper">
                        <label htmlFor="lastName">New lastName</label
                        >
                        <input
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      autoComplete="off"
                      value={user.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                      </div>
                      <div className="input-remember">
                      </div>
                      <button type='submit'  className="sign-in-button">Modify</button> 
                    </form>
          
          ) : (
            null
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>    );
};

export default Profil;