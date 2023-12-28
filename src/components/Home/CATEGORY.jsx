import phone from "../../assets/samsung.png";
import pc from "../../assets/pc.jpg";
import accessories from "../../assets/accessories.jpg";
import { Link, useNavigate } from "react-router-dom";
const CATEGORY = () => {
  return (
    <div className="max-w-7xl mx-auto w-full mb-20 cursor-pointer">
      <h1 className="text-center mb-10 text-gray-800 font-semibold">
       <span style={{borderRadius:"50px 200px 60px", backgroundColor:"yellow",padding:"10px"} } className=""> OUR</span> FEATURE CATEGORY
      </h1>
      <div className="flex flex-col lg:flex-row gap-3 w-fit mx-auto">
        <div className="relative">
          <Link to={'/product/phone'}>
            <h1 className="bg-[#141E46] text-white w-fit px-10 rounded-r-3xl absolute top-0">
              phone
            </h1>
            <img className="w-[300px] h-[200px] rounded" src={phone} alt="" />
          </Link>
        </div>
        <div className="relative">
          <Link to={"/product/pc"}>
            <h1 className="bg-[#141E46] text-white w-fit px-10 rounded-r-3xl absolute top-0">
              pc
            </h1>
            <img className="w-[300px] h-[200px] rounded" src={pc} alt="" />
          </Link>
        </div>
        <div className="relative ">
          <Link to={"/product/Accessories"}>
            <h1 className="bg-[#141E46] text-white w-fit px-10 rounded-r-3xl absolute top-0">
              accessories
            </h1>
            <img
              className="w-[300px] h-[200px] rounded"
              src={accessories}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CATEGORY;
