import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./fireBase";
import axios from "axios";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_SERVER}/jwt`, {
            email: currentUser.email,
          })
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("token", token);
            localStorage.setItem('user','true')
            setLoading(false);
          });
      }else{
        localStorage.removeItem('token')
        localStorage.removeItem('user')

      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const value = {
    createUser,
    auth,
    user,
    loading,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
