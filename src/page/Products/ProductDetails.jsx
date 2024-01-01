import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useAxiosInterceptor from "../../Hook/useAxiosInterceptor";
import car from "../../assets/car.png";
import money from "../../assets/money.png";
import gift from "../../assets/gift.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AuthContext } from "../../Firebase/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const axiosInterceptor = useAxiosInterceptor();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [number, setNumber] = useState(1);

  const handelCard = async () => {
    const proImg = product.image;
    const proName = product.name;
    const seller = product.sellerEmail;
    const proId = product._id;
    const cardData = {
      proId,
      proImg,
      proName,
      seller,
      user: user?.email,
      quantity: number,
    };
    const cardRes = await axiosInterceptor.post(
      `/addToCard/${product._id}`,
      cardData
    );
  };
  useEffect(() => {
    axiosInterceptor
      .get(`/singleProduct/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  return (
    <div className="mt-10 mb-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-7 items-center">
        <img className="w-[300px]" src={product.image} alt="" />
        <div className="lg:w-[60%] text-center lg:text-start">
          <h1 className="text-gray-950 font-semibold">{product.category}</h1>
          <h1 className="text-gray-950 font-semibold mt-2">{product.name}</h1>
          <p className="text-gray-950 font-semibold mt-2 mb-2">
            price: ${product.price}
          </p>
          <p className="text-gray-500 mb-2 p-3">{product.description}</p>
          <h1 className="text-gray-950 mb-2 font-semibold">
            Available:
            {product.quantity > 0 ? (
              <span> In Stock</span>
            ) : (
              <span>Out off Stock</span>
            )}
          </h1>
          <div className="flex justify-center lg:justify-start items-center mb-3 gap-4">
            <button
              disabled={number === 1}
              onClick={() => setNumber(number - 1)}
            >
              <FaMinus></FaMinus>
            </button>
            <div className="">
              <h1>{number}</h1>
            </div>
            <button
              disabled={product.quantity === number}
              onClick={() => setNumber(number + 1)}
            >
              <FaPlus></FaPlus>
            </button>
          </div>
          <Link
            to={"/dashboard/addToCard"}
            onClick={handelCard}
            className="bg-[#FF6C22] text-white p-1 rounded"
          >
            Add To cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
