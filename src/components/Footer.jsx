import logo from "../assets/footer-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#C3E2C2]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-around gap-4 p-10">
        <div className="">
          <img src={logo} alt="" />
          <p className="flex items-center gap-2 mt-2">
            Contact Us :<span> +91 123456789</span>
          </p>
          <p className="flex items-center gap-2 mt-3 mb-3">
            Email :<span> contactInfo@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            LOcation :<span> Dhaka, Bangladesh</span>
          </p>
        </div>
        <div className="">
          <h1 className="text-black font-bold mb-3">Our company</h1>
          <h1>My Account</h1>
          <h1 className="mt-3 mb-3">Specials</h1>
          <h1>Contact Us</h1>
          <h1 className="mt-3">Order History</h1>
        </div>
        <div className="">
          <h1 className="font-bold"> Extras</h1>
          <h1 className="mt-3">Brands</h1>
          <h1 className="mt-3 mb-3">Gift Certificates</h1>
          <h1>Affiliate</h1>
          <h1 className="mb-3">Specials</h1>
        </div>
      </div>
      <h1 className="bg-[#3A4D39] text-white text-center p-4">
        Powered By OpenCart Your Store © 2023
      </h1>
    </footer>
  );
};

export default Footer;
