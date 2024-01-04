import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useAxiosInterceptor from "../../../../Hook/useAxiosInterceptor";

const SingleCardData = ({ cart, setId }) => {
  const { price, proName, proImg, color } = cart;
  const [quantity, setQuantity] = useState(cart.quantity);
    const axiosInterceptor=useAxiosInterceptor()
  const handleIncCart = async(id) => {
    setId(id)
    setQuantity(quantity + 1);
    const res=await axiosInterceptor.patch(`/updatedCart/${id}`,{quantity})
  };

  const handleDecCart = async(id) => {
    setId(id);
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
    const res=await axiosInterceptor.patch(`/updatedCart/${id}`,{quantity})
  };

  return (
    <div className="bg-[#FDF7E4] rounded shadow shadow-gray-600 p-2 w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img className="w-[100px]" src={proImg} alt="" />
          <div className="">
            <h1>{proName}</h1>
            <h1>color: {color}</h1>
            <h1>${price}</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => handleDecCart(cart._id)}>
            <FaMinus></FaMinus>
          </button>
          <h1>{quantity}</h1>
          <button
            disabled={quantity === 5}
            onClick={() => handleIncCart(cart._id)}
          >
            <FaPlus></FaPlus>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCardData;
