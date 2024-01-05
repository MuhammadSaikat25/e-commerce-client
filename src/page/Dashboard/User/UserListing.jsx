import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";

const UserListing = () => {
  const [myOrder, setMyOrder] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  useEffect(() => {
    axiosInterceptor
      .get(`/myOrder/${user?.email}`)
      .then((res) => setMyOrder(res.data));
  }, [user?.email]);
  console.log(myOrder);
  return (
    <div className="w-full">
      <h1>My Listing</h1>
      <div className="w-full lg:mt-12">
        <table className="lg:w-[50%] border-collapse">
          <thead className="bg-slate-200 rounded-3xl text-blue-600">
            <tr className="">
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Image
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Product Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Quantity
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Price
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Seller Email
              </th>
            </tr>
          </thead>
          {/* ------------------- Table Body------------------ */}
          <tbody className="w-full">
            {myOrder?.map((data) => (
              <tr key={data._id} className="">
                <td className="py-4 align-middle hover:shadow-xl duration-1000 shadow-gray-200 p-4">
                  <img className="w-[50px]" src={data.proImg} alt="" />
                </td>
                <td>{data.proName}</td>
                <td>{data.quantity}</td>
                <td>${data.totalPrice}</td>
                <td>{data.seller}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListing;
