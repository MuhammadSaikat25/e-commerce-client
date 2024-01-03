import { Link, NavLink } from "react-router-dom";

const AdminDashboard = () => {
  
  return (
    <div className="w-full flex flex-col gap-14">
      <NavLink
        className={`text-gray-700 font-bold`}
        to={"/dashboard/SellerRequest"}
      >
        Seller Request
      </NavLink>
      <Link className="font-bold text-gray-700" to={`/`}>Home</Link>
    </div>
  );
};

export default AdminDashboard;
