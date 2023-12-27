import { useContext, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AuthContext } from "../Firebase/AuthProvider";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import logo from "../assets/brand-img.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* ---------------------------nav header section----------------------- */}
      <div className="bg-[#31304D] flex items-center lg:justify-around justify-between p-4">
        <div className="flex flex-col lg:flex-row items-center lg:gap-8">
          <span className="flex items-center gap-1 text-white">
            <FaPhoneAlt></FaPhoneAlt>
            <h1>+1672200064</h1>
          </span>
          <span className="flex items-center gap-1 text-white">
            <MdEmail></MdEmail>
            <h1>contact@gmail.com</h1>
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:gap-8 text-white">
          <h1>FAQS</h1>
          <h1>Need Help?</h1>
        </div>
      </div>
      {/* --------------------- Nav for lg device ----------------- */}
      <div className="bg-[#FFFBF5]">
        <div className=" max-w-7xl mx-auto w-full flex items-center justify-between">
          <img className="w-[200px] hidden lg:block" src={logo} alt="" />
          <div className="hidden lg:flex items-center gap-4 font-semibold text-gray-700">
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>Shipping & returns</NavLink>
            <NavLink>Contact</NavLink>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-4 font-semibold text-gray-700 w-full lg:w-fit">
            <img className="w-[200px] lg:hidden" src={logo} alt="" />
            <div className="flex gap-4">
              <NavLink>Sing In</NavLink>
              <NavLink>Sing Up</NavLink>
              <NavLink>Sing Out</NavLink>
              <NavLink>Dashboard</NavLink>
            </div>
          </div>
        </div>
        {/* --------------------------- nav for sm device --------------------------- */}
        <div className="lg:hidden max-w-7xl mx-auto bg-[#AFC8AD] ">
          <span className="flex justify-end" onClick={() => setOpen(!open)}>
            {open ? (
              <IoMdClose color="white" size={30}></IoMdClose>
            ) : (
              <MdMenuOpen color="white" size={30}></MdMenuOpen>
            )}
          </span>
        </div>
        {open && (
          <div className="flex items-center w-fit z-50 absolute right-1 h-fit flex-col bg-[#04364A] text-white p-3">
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>Shipping & returns</NavLink>
            <NavLink>Contact</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
