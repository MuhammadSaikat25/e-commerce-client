import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/Logo.png";
import { RiMenuFoldFill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="w-full items-center justify-between lg:justify-around bg-[#262A56] flex text-white gap-14 p-3">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <div className="hidden lg:flex gap-4 items-center">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400 "}
            to={"/dashboard/SellerRequest"}
          >
            Seller Request
          </NavLink>
          {/* <NavLink className={({isActive})=>isActive && 'text-orange-500 '} to={"/dashboard/manageUser"}>Manage User</NavLink> */}
          <Link className="" to={`/`}>
            Home
          </Link>
        </div>
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <TfiClose></TfiClose> : <RiMenuFoldFill></RiMenuFoldFill>}
        </div>
      </div>
      {open && (
        <div className="flex flex-col absolute right-0 text-white w-fit p-2 z-50 bg-[#413543]">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400 "}
            to={"/dashboard/SellerRequest"}
          >
            Seller Request
          </NavLink>
          <NavLink to={"/dashboard/manageUser"}>Manage User</NavLink>
          <Link className="" to={`/`}>
            Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
