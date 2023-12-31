import { useContext, useState } from "react";
import logo from "../assets/footer-logo.png";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const SingIn = () => {
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handelLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const signInRes = await signIn(email, password);
      setError("");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/invalid-login-credentials") {
        setError("invalid-login-credentials");
      }
    }
  };

  return (
    <div className="bg-[#FFF7D4] flex items-center justify-center h-screen p-3">
      <div className=" border-gray-700 shadow-2xl bg-[#FFF78A] shadow-gray-500 p-10 rounded border-2">
        <span className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-gray-600">Welcome to </h1>
          <img src={logo} alt="" />
        </span>
        <form
          onSubmit={handelLogin}
          className="mt-4 flex flex-col gap-4 relative"
        >
          <input
            className="border-b-2 border-gray-950 w-full p-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="border-b-2 border-gray-950 w-full p-2 rounded-md "
            type={`${show ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            required
          />
          {loading ? (
            <div className="w-full flex justify-center">
              <span className="loading text-center loading-spinner loading-md"></span>
            </div>
          ) : (
            <button className="bg-[#F05941] text-white rounded-sm font-bold">
              Sing In
            </button>
          )}
          <span
            className="absolute bottom-14 lg:bottom-[50px] right-3"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <FaRegEyeSlash></FaRegEyeSlash>
            ) : (
              <IoEyeOutline></IoEyeOutline>
            )}
          </span>
        </form>
        <div className="mt-2 flex items-center gap-4">
          <h1 className="w-full h-[2px] bg-orange-600"></h1>
          <h1 className="text-green-900 font-bold">OR</h1>
          <h1 className="w-full h-[2px] bg-blue-600"></h1>
        </div>
        <div className="relative">
          <button className="bg-[#1F4172] text-white w-full px-10 rounded-3xl py-1">
            Sing in white Google
          </button>
        </div>
        <h1 className="text-center text-red-600">{error}</h1>
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-gray-950">New to TecHouse</h1>
          <Link className="text-blue-700 " to={"/singUp"}>
            Sing In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
