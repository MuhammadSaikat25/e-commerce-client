import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import useAxiosInterceptor from "../../../../Hook/useAxiosInterceptor";
import { IoMdClose } from "react-icons/io";

const SingleCardData = ({ cart, setId }) => {
  const { price, proName, proImg, color, _id, seller, proId, user, category } =
    cart;
  const [quantity, setQuantity] = useState(cart.quantity);
  const axiosInterceptor = useAxiosInterceptor();
  // ! ----------------- Inc cart quantity
  const handleIncCart = async (id) => {
    setQuantity((quantity) => quantity + 1);
    const res = await axiosInterceptor.patch(`/updatedCart/${id}`, {
      quantity,
    });
  };
  // ! ----------------- dec cart quantity
  const handleDecCart = async (id) => {
    setQuantity((quantity) => quantity - 1);
    const res = await axiosInterceptor.patch(`/updatedDecCart/${id}`, {
      quantity,
    });
  };
  // ! ------------------- delete cart item
  const deleteCart = async (id) => {
    setId(id);
    const deleteCartRes = await axiosInterceptor.delete(`/deleteCart/${id}`);
  };
  // ! -------------------------- handel payment
  const handelPayment = async (
    id,
    user,
    price,
    quantity,
    proId,
    seller,
    proImg,
    category
  ) => {
    setId(id);
    const totalPrice = Number((price * quantity).toFixed(2));
    const paymentInfo = {
      user,
      totalPrice,
      quantity,
      proId,
      seller,
      proImg,
      proName,
      category,
    };
    const postPaymentRes = await axiosInterceptor.post(`/payment`, paymentInfo);
    const incSellNumber = await axiosInterceptor.patch(
      `/incSellNumber/${proId}`,
      { quantity }
    );
    const deleteCartRes = await axiosInterceptor.delete(`/deleteCart/${id}`);
  };
  return (
    <div className="relative w-full">
      <div className="">
        <div className="lg:flex p-5 items-center text-slate-950 justify-between relative">
          <div className="flex justify-between gap-2">
            <img className="w-[100px]" src={proImg} alt="" />
            <div className="">
              <h1>{proName}</h1>
              <h1>color: {color}</h1>
              <h1>${price}</h1>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <button
                disabled={quantity === 1}
                onClick={() => handleDecCart(cart._id)}
              >
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
                <IoMdClose
                  onClick={() => deleteCart(_id)}
                  size={25}
                ></IoMdClose>
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <button
        onClick={() =>
          handelPayment(
            _id,
            user,
            price,
            quantity,
            proId,
            seller,
            proImg,
            category
          )
        }
        className="absolute bottom-6 lg:bottom-0 mt-6 right-3 z-50 bg-[#711DB0] p-1 rounded text-white"
      >
        Payment
      </button>
    </div>
  );
};

export default SingleCardData;
