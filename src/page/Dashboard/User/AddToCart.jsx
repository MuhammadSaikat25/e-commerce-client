import { useContext, useEffect, useState } from "react";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { AuthContext } from "../../../Firebase/AuthProvider";
import SingleCardData from "../components/user/SingleCardData";

const AddToCart = () => {
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const [myCart, setMyCart] = useState([]);
  const [id,setId]=useState('')
 
  useEffect(() => {
    axiosInterceptor
      .get(`/getAllCardData/${user?.email}`)
      .then((res) => {
        const restCart=res.data.filter(cart=>cart._id!==id)
        setMyCart(restCart)
      });
  }, [user?.email,id]);

  return (
    <div className="lg:w-[50%]">
      <h1>Manage Cart Items</h1>
      <div className="w-full">
        {myCart?.map((cart) => (
          <SingleCardData key={cart?._id} setId={setId} cart={cart}></SingleCardData>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;
