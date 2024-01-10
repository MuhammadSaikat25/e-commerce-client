import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../Hook/useAxiosInterceptor";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";

const SellerPrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosInterceptor = useAxiosInterceptor();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axiosInterceptor.get(`/getUser/${user?.email}`).then((res) => {
      setRole(res.data.role);
      setIsLoading(false);
    });
  }, [user?.email]);

  if (loading || isLoading) {
    return <h1 className="px-[200px]">Loading...</h1>;
  }
  if (user && role === "seller") {
    return children;
  }
  navigate("/");
};

export default SellerPrivateRoute;
