import { createContext, useEffect, useState } from "react";
import { app } from "../firebase-config/firebase.confing";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

export const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscrib();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userSignIn,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
