import samsung from "../../assets/samsung.png";
import iphone from "../../assets/iphone.jpg";
import apple from "../../assets/Apple-Watch.jpg";
const ImageSection = () => {
  return (
    <div className="max-w-7xl mx-auto w-full lg:mt-[40px] lg:mb-20 relative">
      <div className="flex flex-col lg:flex-row gap-2 p-3">
        <img
          className="lg:w-[50%] mx-auto lg:h-[400px] rounded cursor-pointer"
          src={samsung}
          alt=""
        />
        <img
          className="lg:w-[50%] lg:h-[400px] rounded cursor-pointer"
          src={iphone}
          alt=""
        />
      </div>
      <div className="hidden lg:block absolute w-[100%] -bottom-10">
        <img
          className={`w-[80%]  mx-auto h-[170px] object-cover `}
          src={apple}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageSection;
