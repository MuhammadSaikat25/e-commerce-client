import { useState } from "react";
import logo from "../assets/footer-logo.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const SingIn = () => {
    const [show,setShow]=useState(false)
   
  return (
    <div className="bg-[#FFF7D4] flex items-center justify-center h-screen p-3">
      <div className=" border-gray-700 shadow-2xl bg-[#FFF78A] shadow-gray-500 p-10 rounded border-2">
        <span className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-600">Welcome to </h1>
          <img src={logo} alt="" />
        </span>
        <form className="mt-4 flex flex-col gap-4 relative">
          <input
            className="border-b-2 border-gray-950 w-full p-2 rounded-md"
            type="email"
            name=""
            placeholder="Email"
          />
          <input
            className="border-b-2 border-gray-950 w-full p-2 rounded-md "
            type={`${show? 'text':"password" }`}
            name=""
            placeholder="Password"
          />
         <button className="bg-[#F05941] text-white rounded-sm font-bold">Sing In</button>
         <span className="absolute bottom-14 lg:bottom-[50px] right-3" onClick={()=>setShow(!show)}>
            {
                show ? <FaRegEyeSlash></FaRegEyeSlash>:<IoEyeOutline></IoEyeOutline>
            }
         </span>
        </form>
        <div className="mt-2 flex items-center gap-4">
            <h1 className="w-full h-[2px] bg-orange-600"></h1>
            <h1 className="text-green-900 font-bold">OR</h1>
            <h1 className="w-full h-[2px] bg-blue-600"></h1>
        </div>
        <div className="relative">
            <button className="bg-[#1F4172] text-white w-full px-10 rounded-3xl py-1">Sing in white Google</button>
            
        </div>
      </div>
    </div>
  );
};

export default SingIn;
