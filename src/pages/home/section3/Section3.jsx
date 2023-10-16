import React from "react";
import Swiperdata from "./Swiperdata";
import Swiper from "./Swiper";
const Section3 = () => {
  return (
    <>
      <div className="bg-gray-50 py-[80px] ">
        <h4 className="text-center text-slate-800 text-[40px] font-normal font-['BR Omega'] leading-[54px]">
          Featured profiles
        </h4>
        <p className="text-center text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px] mb-8">
          Aenean at ligula massa. Donec ipsum elit, placenta sed duierrut <br />
          dapibus semper turpin Fusce nec premium nuns.
        </p>
        <Swiper details={Swiperdata} />
      </div>
    </>
  );
};

export default Section3;
