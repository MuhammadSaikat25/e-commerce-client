import { useContext, useState } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";
import useAxiosInterceptor from "../../../Hook/useAxiosInterceptor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const [category, setCategory] = useState("accessory");
  const { user } = useContext(AuthContext);
    const axiosInterceptor=useAxiosInterceptor()
  const handelAddProduct = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const color = e.target.color.value;
    const description = e.target.description.value;
    const quantity =Number( e.target.quantity.value)
    const price = Number(e.target.price.value)
    const productData = {
      name,
      image,
      category,
      color,
      description,
      quantity,
      price,
      sellerUser:user?.email,
      selling:0,
      block:false
    };
   const AddRes=await axiosInterceptor.post(`/addedProductBySeller`,productData)
   if(AddRes.status===200){
    toast('Added Product Successful')
   }
  };
  return (
    <div className="p-10 lg:w-[70%] flex justify-center h-screen items-center">
        <ToastContainer></ToastContainer>
      <form
        onSubmit={handelAddProduct}
        className="border flex w-full rounded-md flex-col h-fit gap-3 p-3"
      >
        <input
          className="border-black border rounded p-1"
          type="text"
          name="name"
          placeholder="product Name"
          required
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="image"
          placeholder="Image Url"
          required
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="color"
          placeholder="color Name"
          required
        />
        <input
          className="border-black border rounded p-1"
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <input
          className="border-black border rounded p-1"
          type="number"
          name="quantity"
          placeholder="Quantity"
          required
        />
        <input
          className="border-black border rounded p-1"
          type="number"
          name="price"
          placeholder="Price"
          required
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
        <button type="submit" className="bg-[#F31559] text-white p-1 ">
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
