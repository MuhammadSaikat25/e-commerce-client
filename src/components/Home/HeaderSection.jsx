import img from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import apple from "../../assets/Apple-Watch.jpg";

const HeaderSection = () => {
 
  return (
    <div>
      <div className="carousel relative w-full lg:h-[50%]">
        <div id="slide1" className="carousel-item relative w-full lg:h-[500px]">
          <img src={img} className="w-full object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative lg:h-[500px] w-full">
          <img src={img2} className="w-full object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative lg:h-[500px] w-full">
          <img src={img3} className="w-full object-fill" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute w-[100%] bottom-5 ">
        <img className={`w-[80%]  mx-auto h-[170px] object-cover opacity-80`} src={apple} alt="" />
      </div>
    </div>
  );
};

export default HeaderSection;
