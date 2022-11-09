import React from "react";
import { Link } from "react-router-dom";

import style from "./style/Account.module.css";
import { UseAuth } from "../context/AuthContext";
const Account = () => {
  const { currentUser, logout } = UseAuth();

  return (
    <div className={style.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
