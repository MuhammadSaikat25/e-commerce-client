import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";
import SingleCardData from "../components/user/SingleCardData";

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const [myCart, setMyCart] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    axiosInterceptor.get(`/getAllCardData/${user?.email}`).then((res) => {
      const restCart = res.data.filter((cart) => cart._id !== id);
      setMyCart(restCart);
    });
  }, [user?.email, id]);

  return (
    <div className="lg:w-[50%] mx-auto p-2">
      <h1 className=" text-2xl mb-3 lg:mb-0 font-semibold text-gray-700 mt-11">
        Manage Cart Items
      </h1>
      {myCart.length > 0 ? (
        <div className="w-full lg:mt-10 bg-[#FB8B24] shadow shadow-gray-600 p-5 rounded-xl">
          {myCart?.map((cart) => (
            <SingleCardData
              key={cart?._id}
              setId={setId}
              cart={cart}
            ></SingleCardData>
          ))}
        </div>
      ) : (
        <h1 className="mt-7 text-2xl">No data found</h1>
      )}
    </div>
  );
};

export default AddToCart;
