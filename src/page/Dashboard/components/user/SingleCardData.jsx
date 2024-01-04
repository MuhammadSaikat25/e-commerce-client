import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useAxiosInterceptor from "../../../../Hook/useAxiosInterceptor";
import { IoMdClose } from "react-icons/io";

const SingleCardData = ({ cart, setId }) => {
  const { price, proName, proImg, color, _id, seller, proId, user } = cart;
  const [quantity, setQuantity] = useState(cart.quantity);
  const axiosInterceptor = useAxiosInterceptor();
  // ! ----------------- Inc cart quantity
  const handleIncCart = async (id) => {
    setQuantity(quantity + 1);
    const res = await axiosInterceptor.patch(`/updatedCart/${id}`, {
      quantity,
    });
  };
  // ! ----------------- dec cart quantity
  const handleDecCart = async (id) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    const res = await axiosInterceptor.patch(`/updatedCart/${id}`, {
      quantity,
    });
  };
  // ! delete cart item
  const deleteCart = async (id) => {
    setId(id);
    const deleteCartRes = await axiosInterceptor.delete(`/deleteCart/${id}`);
  };
  return (
    <div className="bg-[#FDF7E4] rounded shadow shadow-gray-600 p-2 w-full">
      <div className="flex items-center justify-between relative">
        <div className="flex gap-2">
          <img className="w-[100px]" src={proImg} alt="" />
          <div className="">
            <h1>{proName}</h1>
            <h1>color: {color}</h1>
            <h1>${price}</h1>
          </div>
        </div>
        <div className="">
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
          <div className="flex items-center gap-2 mt-3">
            <h1 className="">Total: ${(price * quantity).toFixed(2)}</h1>
            <p className="cursor-pointer">
              <IoMdClose onClick={() => deleteCart(_id)} size={25}></IoMdClose>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardData;
