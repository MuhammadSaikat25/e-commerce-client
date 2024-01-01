import { Link } from "react-router-dom";


const SingleJob = ({ products }) => {
 
  return (
    <Link to={`/productDetails/${products._id}`}>
      <div className="w-fit relative border mx-auto border-black rounded shadow-md shadow-gray-500">
        <img className="w-[300px] h-[300px]" src={products.image} alt="" />
        <div className="bg-[#22092C] p-1 rounded flex items-center justify-between">
          <h1 className="text-white">{products.name}</h1>
          <h1 className="text-white">${products.price}</h1>
        </div>
        <h1 className="absolute top-0 text-white right-0 px-6 bg-blue-900">
          {products.category}
        </h1>
      </div>
    </Link>
  );
};

export default SingleJob;
