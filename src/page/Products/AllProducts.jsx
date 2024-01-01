import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
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
            <SingleProduct key={products._id} products={products}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
