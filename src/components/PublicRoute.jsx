import React from "react";

import { Navigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";
const PublicRoute = ({ children }) => {
  const { currentUser } = UseAuth();

  return !currentUser ? children : <Navigate to="/" replace />;

  //   if (!currentUser) {
  //     return <Navigate to="/login" replace />;
  //   } else {
  //     return children;
  //   }
};

export default PublicRoute;
