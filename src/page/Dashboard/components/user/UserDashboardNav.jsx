import { Link, NavLink } from "react-router-dom";
import logo from "../../../../assets/Logo.png";
import { RiMenuFoldFill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const UserDashboardNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="flex items-center justify-between lg:justify-around bg-[#3D3B40] gap-10 p-2 text-white">
        <Link to={"/"}>
          <img className="w-[150px]" src={logo} alt="" />
        </Link>
        <div className="lg:flex gap-3 items-center hidden">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/dashboard/addToCard`}
          >
            My cart
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/dashboard/myListing`}
          >
            My Listing
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/`}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/products`}
          >
            Product
          </NavLink>
        </div>
        {/* ------------------ Sm Device ------------------ */}
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <TfiClose></TfiClose> : <RiMenuFoldFill></RiMenuFoldFill>}
        </div>
      </div>
      {open && (
        <div className="flex flex-col lg:hidden gap-3 items-center bg-[#31304D] w-fit text-white p-3 absolute right-0 z-50">
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/dashboard/addToCard`}
          >
            My cart
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/dashboard/myListing`}
          >
            My Listing
          </NavLink>
          <NavLink
            className={({ isActive }) => isActive && "text-orange-400"}
            to={`/products`}
          >
            Product
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default UserDashboardNav;
