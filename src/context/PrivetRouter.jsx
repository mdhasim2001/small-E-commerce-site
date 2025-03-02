import React, { useContext } from "react";
import { AuthContext } from "./UserContext";
import { Navigate, useLocation } from "react-router-dom";

export const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return;
  } else if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login" />;
};
