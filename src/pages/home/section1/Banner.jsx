import React from "react";
import Form from "../section1/Form";
const Banner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/banner-img.jpg')] w-[100%] h-[900px] relative bg-cover bg-no-repeat bg-center overflow-hidden sm:bg-left">
        <div className=" absolute top-[70px] right-[70px] sm:bottom-0 sm:top-[30%]">
          <div className="">{Form()}</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
