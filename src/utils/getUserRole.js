import { useContext, useEffect } from "react";
import useAxiosInterceptor from "../Hook/useAxiosInterceptor";
import { AuthContext } from "../Firebase/AuthProvider";

const getUserRole =async()=> {
    const {user}=useContext(AuthContext)
   const axiosInterceptor=useAxiosInterceptor()
   const res=await axiosInterceptor.get(`/getUser/${user?.email}`)
   return res.d

};

export default getUserRole;