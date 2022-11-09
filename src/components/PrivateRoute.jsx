import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
const PrivateRoute = ({ children }) => {
  const { currentUser } = UseAuth();

  return currentUser ? children : <Navigate to="/login" replace />;

  //   if (!currentUser) {
  //     return <Navigate to="/login" replace />;
  //   } else {
  //     return children;
  //   }
};

export default PrivateRoute;
