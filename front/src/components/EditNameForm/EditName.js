import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userService } from "../../services/user.service";
import { setUpdateUserData } from "../../feature/user.slice";
import { useDispatch } from "react-redux";
import "./editName.css";

const EditName = () => {
  const userData = useSelector((state) => state.user.user);
  const [handleForm, setHandleForm] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    setUser({
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
  }, [userData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleCheckSubmit = (e) => {
    e.preventDefault();
    userService.putUser(user).then((res) => {
      dispatch(setUpdateUserData(user));
      setHandleForm(false);
    });
  };

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {handleForm ? (
        <form onSubmit={(e) => handleCheckSubmit(e)}>
          <div className="inputContainer">
            <div className="input-wrapper">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-wrapper">
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                autoComplete="off"
                value={user.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="input-remember"></div>
          <div className="btnContainer">
            <button type="submit">Save</button>
            <button onClick={() => setHandleForm(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <h1>
          {userData.firstName} {userData.lastName} !
        </h1>
      )}
      {handleForm ? null : (
        <button
          className="edit-button"
          onClick={() => setHandleForm(!handleForm)}
        >
          Edit Name
        </button>
      )}
    </div>
  );
};

export default EditName;
