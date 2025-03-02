import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

export const Profile = () => {
  const { userSignOut } = useContext(AuthContext);
  const handleUserSignOut = () => {
    userSignOut();
    <Navigate to="login" />;
  };
  return (
    <div>
      <h1>your profile</h1>
      <button onClick={handleUserSignOut}>Log out</button>
    </div>
  );
};
