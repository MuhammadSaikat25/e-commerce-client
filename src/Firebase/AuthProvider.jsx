import { createContext } from "react";
export const AuthContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./fireBase";

const AuthProvider = ({ children }) => {
    const auth=getAuth(app)

    const crateUser=(email,password)=>{
      return createUserWithEmailAndPassword(auth,email,password)
    }
    const value ={
      crateUser,auth
    }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
