import React, { useEffect, useState } from "react";
import macImage from "../../assets/mac.png";

const Parallax = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${macImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    width: "500px",
    height: "400px",
  };

  const initialDuration = 530 * 24 * 60 * 60;
  const [remainingTime, setRemainingTime] = useState(initialDuration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(remainingTime / (24 * 60 * 60));
  const hours = Math.floor((remainingTime % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
  const seconds = remainingTime % 60;
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100">
      <div className="bg-fixed" style={backgroundImageStyle}></div>
      <div className="p-4 bg-none">
        <p className="text-black text-3xl font-semibold">Deal Of The Day</p>
        <p className="text-gray-500 text-2xl mt-1 mb-1">It’s black friday, every friday!</p>
        <p>
          Praesent nec finibus massa. Phasellus id auctor lacus, at iaculis
          lorem. Donec
          <span>quis arcu elit. In vehicula purus se.</span>
        </p>
        {/* _______________________ Time Section ______________________ */}
        <div className="">
          <section className="flex items-start gap-5 mt-2 ">
            <div>
              <span className="bg-white p-3 rounded-full text-3xl flex flex-col items-center justify-center">
                {days}
              </span>
              <h1> Days</h1>
            </div>
            <div>
              <span className="bg-white p-3 rounded-full text-3xl flex flex-col items-center justify-center">
                {hours}
              </span>
              <h1>Hours</h1>
            </div>
            <div>
              <span className="bg-white p-3 rounded-full text-3xl flex flex-col items-center justify-center">
                {minutes}
              </span>
              <h1> Minutes</h1>
            </div>
            <div>
              <span className="bg-white text-gray-500 p-3 rounded-full text-3xl flex flex-col items-center justify-center">
                {seconds}
              </span>
              <h1 className="text-gray-500">Seconds</h1>
            </div>
          </section>
          <button className="mt-4 bg-[#FFC436] text-black font-semibold rounded p-1">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
