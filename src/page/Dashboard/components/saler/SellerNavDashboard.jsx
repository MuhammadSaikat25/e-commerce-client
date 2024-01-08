import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/Logo.png";
import { RiMenuFoldFill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const SellerNavDashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex items-center justify-between lg:justify-around bg-[#102C57] gap-6 p-3">
        <Link to={"/"}>
          <img className="w-[150px]" src={logo} alt="" />
        </Link>
        <div className="hidden lg:flex gap-4 items-center text-white">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-500"}
            to={`addProduct`}
          >
            Add Products
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-500"}
            to={`SellerProducts`}
          >
            My Products
          </NavLink>
        </div>
        {/* ------------------ Nav for sm ------------------ */}
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <TfiClose color="white"></TfiClose> : <RiMenuFoldFill color="white"></RiMenuFoldFill>}
        </div>
      </div>
      {open && (
        <div className="absolute right-0 z-50 flex flex-col gap-3 w-fit bg-[#482121] p-3 text-white">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-500"}
            to={`addProduct`}
          >
            Add Products
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-500"}
            to={`SellerProducts`}
          >
            My Products
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default SellerNavDashboard;
