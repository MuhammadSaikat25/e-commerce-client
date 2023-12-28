import banner from "../../assets/Newslatter-banner.png";

const Newsletter = () => {
  return (
    <div className="mt-12 p-10" style={{ backgroundImage: `url(${banner})` }}>
      <div className="flex justify-center items-center gap-12">
        <div className=" ">
          <h1 className="text-white font-semibold text-2xl">
            Sign Up For Our Newsletter
          </h1>
          <h1 className="text-white">Subscribe our newsletter and get discount 20% Off</h1>
        </div>
        <div className="flex items-center">
          <input className="border w-full p-1 rounded-l-3xl" type="text" placeholder="Enter your Email"/>
          <button className="bg-orange-600 text-white px-4 py-1 rounded-r-3xl">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
