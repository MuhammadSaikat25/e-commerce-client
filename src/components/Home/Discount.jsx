import macBook from "../../assets/iphoneBanner.png";
const Discount = () => {
  return (
    <div className="mb-20 relative">
      <p className="text-white absolute lg:left-[250px] lg:top-[50px] font-semibold lg:text-3xl">
        Big Discount
      </p>
      <p className="text-yellow-400 p-2 border border-orange-700 absolute top-[20px] lg:left-[250px] lg:top-[100px]">
        Save Up To 80% Off
      </p>
      <div className="">
        <img className="lg:w-fit lg:mx-auto " src={macBook} alt="" />
      </div>
    </div>
  );
};

export default Discount;
