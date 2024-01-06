import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";


const MyProducts = () => {
  const axiosInterceptor = useAxiosInterceptor();
  const { user } = useContext(AuthContext);
  const [MyProducts, setMyProducts] = useState([]);
  useEffect(() => {
    axiosInterceptor
      .get(`/sellerProducts/${user?.email}`)
      .then((res) => setMyProducts(res.data));
  }, [user?.email]);
  return (
    <div className="lg:mt-10">
      <table className="lg:w-[70%] mx-auto border-collapse ">
        <thead className="bg-slate-200 rounded-3xl text-blue-600">
          <tr className="">
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Image
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Quantity</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Selling
            </th>
            <td>Action</td>
          </tr>
        </thead>
        {/* ------------------- Table Body------------------ */}
        <tbody className="w-full">
          {MyProducts?.map((data) => (
            <tr key={data._id} className="">
              <td>
                <img className="w-[70px]" src={data.image} alt="" />
              </td>
              <td>{data.name}</td>
              <td>{data.quantity}</td>
              <td>${data.price}</td>
              <td>{data.selling}</td>
              <td className="flex items-center mt-3 gap-4 cursor-pointer">
                <span><CiEdit size={20} color="blue"></CiEdit></span>
                <span><MdOutlineDeleteForever size={20} color="blue"></MdOutlineDeleteForever></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
