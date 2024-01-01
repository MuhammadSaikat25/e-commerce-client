import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { IoGrid, IoMenu } from "react-icons/io5";
import SingleJob from "./SingleJob";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelCard = (type) => {
    if (type === "grid") {
      localStorage.setItem("card", "grid");
    } else if (type === "flex") {
      localStorage.setItem("card", "flex");
    }
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_SERVER}/getAllProducts`)
      .then((res) => {
        setAllProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div className=" p-4">
      <div className="max-w-7xl mx-auto w-full">
        {loading && (
          <div className="flex justify-center">
            <Spinner></Spinner>
          </div>
        )}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
          {allProducts?.map((products) => (
            <SingleJob key={products._id} products={products}></SingleJob>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
