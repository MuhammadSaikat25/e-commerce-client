import car from "../../assets/car.png";
import money from "../../assets/money.png";
import gift from "../../assets/gift.png";
const ShopSafely = () => {
  return (
    <div className="mt-10 max-w-7xl mx-auto w-full ">
      <h1 className="text-center text-2xl font-semibold text-gray-900">
        Shop safely
        <span
          style={{
            borderRadius: "50px 200px 60px",
            backgroundColor: "yellow",
            padding: "10px",
          }}
          className=""
        >
          With
        </span>
        e-techouse
      </h1>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:justify-center mt-10">
        <div className="flex items-center gap-1">
          <img src={car} alt="" />
          <section>
            <h1 className="text-gray-900 font-bold">Free Delivery</h1>
            <p>Capped at $20 per order</p>
          </section>
        </div>
        <div className="flex items-center gap-1">
          <img src={money} alt="" />
          <section>
            <h1 className="text-gray-900 font-bold">Way To Buy</h1>
            <p>14 Days to Change your mind</p>
          </section>
        </div>
        <div className="flex items-center gap-1">
          <img src={gift} alt="" />
          <section>
            <h1 className="text-gray-900 font-bold">Gift Voucher</h1>
            <p>Products added every day</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShopSafely;
