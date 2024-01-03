import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../Hook/useAxiosInterceptor";
import UserDashboardNav from "./components/user/UserDashboardNav";
import AdminDashboard from "./components/admin/AdminDashboard";

const DashboardNav = () => {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    setLoading(true);
    axiosInterceptor
      .get(`/getUser/${user?.email}`)
      .then((res) => {
        setLoading(false);
        setRole(res.data.role);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div className="h-screen bg-[#FFC47E] p-2 w-[10%]">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>{role === "user" && <UserDashboardNav></UserDashboardNav>}
        {
          role ==='admin' && <AdminDashboard></AdminDashboard>
        }
        </div>
      )}
    </div>
  );
};

export default DashboardNav;
