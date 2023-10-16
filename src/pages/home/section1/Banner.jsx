import React from "react";
import Form from "../section1/Form";
const Banner = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/banner-img.jpg')] w-[100%] h-[900px] relative bg-cover bg-no-repeat bg-center overflow-hidden">
        <div className=" absolute top-[70px] right-[20px] sm:right-[70px]">
          <div>{Form()}</div>
        </div>
      </div>
    </>
  );
};

export default Banner;
