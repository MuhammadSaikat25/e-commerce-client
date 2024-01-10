import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa6";
import img from "../../../../assets/accessories3.jpg";

const ProductsSellDetails = ({ setPc, setPhone, setAccessory }) => {
  const { user } = useContext(AuthContext);
  const [sellDetail, setSellDetail] = useState([]);
  const axiosInterceptor = useAxiosInterceptor();
  const [pcs, setPcs] = useState();
  const [phones, setPhones] = useState();
  const [accessory, setAccessorys] = useState();

  useEffect(() => {
    axiosInterceptor.get(`/getSellingData/${user?.email}`).then((res) => {
      setPc(res.data.pc);
      setPcs(res.data.pc);
      setPhone(res.data.phone);
      setPhones(res.data.phone);
      setAccessorys(res.data.accessory);
      setAccessory(res.data.accessory);
    });
  }, [user?.email]);
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-10">
      <div className="flex items-center gap-4 bg-red-500 w-fit p-2 rounded-md text-white">
        <FaLaptop color="white" size={30}></FaLaptop>
        <div className="">
          <h1>PC: {pcs}</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-[#FE6244] w-fit p-2 rounded-md text-white">
        <FaMobileScreenButton color="white" size={30}></FaMobileScreenButton>
        <div className="">
          <h1>PHONE: {phones}</h1>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-blue-500 w-fit p-2 rounded-md text-white">
        <img className="w-[31px]" src={img} alt="" />
        <div className="">
          <h1>Accessory: {accessory}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsSellDetails;
