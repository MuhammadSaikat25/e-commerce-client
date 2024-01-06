import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const { id } = useParams();
  const axiosInterceptor = useAxiosInterceptor();
  const [product, setMyProduct] = useState({});
  const [category, setCategory] = useState(product.category);
  useEffect(() => {
    axiosInterceptor
      .get(`/updateProducts/${id}`)
      .then((res) => setMyProduct(res.data));
  }, [id]);
  useEffect(() => {
    setCategory(product.category);
  }, [product.category]);

  const handelUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const color = e.target.color.value;
    const description = e.target.description.value;
    const quantity = Number(e.target.quantity.value);
    const price = Number(e.target.price.value);

    const updateData = {
      name,
      image,
      category,
      color,
      description,
      quantity,
      price,
    };
    const updateRes = await axiosInterceptor.patch(
      `/updateProducts/${product._id}`,
      updateData
    );
    if(updateRes.status===200){
        toast('Update successful')
    }
  };
  return (
    <div className="flex justify-center">
      <ToastContainer></ToastContainer>
      <form
        onSubmit={handelUpdate}
        className="border flex w-[50%] mt-10 border-gray-900 rounded-md flex-col h-fit gap-3 p-3"
      >
        <input
          className="border-black border rounded p-1"
          type="text"
          name="name"
          placeholder="product Name"
          required
          defaultValue={product.name}
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="image"
          placeholder="Image Url"
          required
          defaultValue={product.image}
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="color"
          placeholder="color Name"
          required
          defaultValue={product.color}
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="description"
          placeholder="Description"
          required
          defaultValue={product.description}
        />
        <input
          className="border-black border rounded p-1"
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
          defaultValue={product.quantity}
        />
        <input
          className="border-black border rounded p-1"
          type="number"
          name="price"
          placeholder="Price"
          required
          defaultValue={product.price}
        />
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border border-black p-1 rounded "
          name=""
          id=""
        >
          <option value="accessory">Accessory</option>
          <option value="phone">Phone</option>
          <option value="pc">Pc</option>
        </select>
        <button type="submit" className="bg-[#4D4C7D] text-white p-1 ">
          Update product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
