import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: `http://localhost:5000`,
});
const useAxiosInterceptor = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  axiosInterceptor.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosInterceptor.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 403 || status === 401) {
        await signOut(auth);
        navigate("/singIn");
      }
      return Promise.reject(error);
    }
  );
  return axiosInterceptor;
};

export default useAxiosInterceptor;
