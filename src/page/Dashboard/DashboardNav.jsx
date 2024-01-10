import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../Hook/useAxiosInterceptor";
import UserDashboardNav from "./components/user/UserDashboardNav";
import AdminDashboard from "./components/admin/AdminDashboard";
import SellerNavDashboard from "./components/saler/SellerNavDashboard";

const DashboardNav = () => {
  const [role, setRole] = useState("");
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    axiosInterceptor.get(`/getUser/${user?.email}`).then((res) => {
      setRole(res.data.role);
    });
  }, [user?.email]);

  return (
    <div className="">
      {role === "user" && <UserDashboardNav></UserDashboardNav>}
      {role === "admin" && <AdminDashboard></AdminDashboard>}
      {role === "seller" && <SellerNavDashboard></SellerNavDashboard>}
    </div>
  );
};

export default DashboardNav;
