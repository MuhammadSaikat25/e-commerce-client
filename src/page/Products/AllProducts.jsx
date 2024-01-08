import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalProduct, setTotalProduct] = useState(0);
  const perPage = 6;
  const [currentPage, SetCurrentPage] = useState(1);
  const totalPage = Math.ceil(totalProduct / perPage);
  const page = [...Array(totalPage).keys()];
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER
        }/getAllProducts?page=${currentPage}&limit=${perPage}`
      )
      .then((res) => {
        setAllProducts(res.data);
        setPage(res.data.length);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
    axios
      .get(`${import.meta.env.VITE_SERVER}/getProductNumber`)
      .then((res) => setTotalProduct(res.data.product));
  }, [perPage, currentPage]);

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
            <SingleProduct
              key={products._id}
              products={products}
            ></SingleProduct>
          ))}
        </div>
      </div>
      <div className="">
        <div className="mt-10 flex items-center mb-10 lg:mb-0 justify-center">
          {page?.map((page, i) => (
            <button
              onClick={() => SetCurrentPage(page + 1)}
              className="ml-3 bg-rose-400 px-5 rounded text-white text-2xl"
              key={i}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
