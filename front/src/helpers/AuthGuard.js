import React from "react";
import { Navigate } from "react-router-dom";
import { accountService } from "../services/account_service";

const AuthGuard = ({ children }) => {
  if (!accountService.isLogged()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AuthGuard;
