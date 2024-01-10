import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../../Firebase/AuthProvider";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SellerIncome = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const [totalIncome, setTotalIncome] = useState(0);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosInterceptor
      .get(`/getTotalIncome/${user?.email}`)
      .then((res) => setTotalIncome(res.data.totalIncome));
  }, [user?.email]);
  return <div>
    <div className="flex items-center gap-2 lg:mt-10 bg-[#E11299] w-fit p-2 rounded-md text-white">
        <FaMoneyCheckAlt size={30} color="white"></FaMoneyCheckAlt>
        <div className="">
            <h1>TotalIncome :${totalIncome}</h1>
        </div>
    </div>
  </div>;
};

export default SellerIncome;
