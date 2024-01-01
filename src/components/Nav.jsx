import { useContext, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AuthContext } from "../Firebase/AuthProvider";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdMenuOpen } from "react-icons/md";
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";

const Nav = () => {
  const { auth,} = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handelOut = async () => {
    await signOut(auth);
  };
  const isUser = localStorage.getItem("user");

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
      <div className="bg-[#3A4D39] ">
        <div className=" max-w-7xl mx-auto w-full flex items-center justify-between">
          <Link to={"/"}>
            <img className="w-[200px] hidden lg:block" src={logo} alt="" />
          </Link>
          <div className="hidden lg:flex items-center gap-4 font-semibold text-gray-700">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-orange-400" : "text-white"
              }
              to={"/products"}
            >
              Products
            </NavLink>
            <NavLink className={`text-white`}>Shipping & returns</NavLink>
            <NavLink className={`text-white`}>Contact</NavLink>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-4 font-semibold text-gray-700 w-full lg:w-fit">
            <Link to={"/"}>
              <img className="w-[200px] lg:hidden" src={logo} alt="" />
            </Link>
            <div className="">
              {isUser === "true" ? (
                <div className="flex gap-3">
                  <NavLink onClick={handelOut} className={`text-white`}>
                    Sing Out
                  </NavLink>
                  <NavLink className={`text-white`}>Dashboard</NavLink>
                </div>
              ) : (
                <div className="flex gap-3">
                  <NavLink className={`text-white`} to={"singIn"}>
                    Sing In
                  </NavLink>
                  <NavLink className={`text-white`} to={"singUp"}>
                    Sing Up
                  </NavLink>
                </div>
              )}
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
            <NavLink className={`text-white`}>Home</NavLink>
            <NavLink className={`text-white`} to={"/products"}>
              Products
            </NavLink>
            <NavLink className={`text-white`}>Shipping & returns</NavLink>
            <NavLink className={`text-white`}>Contact</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
