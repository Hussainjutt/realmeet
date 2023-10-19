import React from "react";
import Verticleswiper1 from "./Verticleswiper1";
import Verticleswiper2 from "./Verticleswiper2";
import Swiperdata from "../section5/Swiperdata";
const Section5 = () => {
  return (
    <>
      <div className="flex justify-around my-[50px] py-7 text-white bg-gradient-to-b from-cstm_dark_secondary-100 to-cstm_primary_pink-100 rounded-[40px] ">
        <div className="">
          <div className=" flex flex-col justify-center gap-[30px] w-[430px] h-[600px]">
            <h2 className=" text-white text-[40px] font-normal font-['BR Omega'] leading-[46px]">
              We have thousands of success stories
            </h2>
            <p className=" text-white text-lg font-normal font-['BR Omega'] leading-[25.20px]">
              Lorem ipsum dolor sit amet consectetur. Convallis id elit egoists
              aurice amet eu lactose Lucius intercom. Proin pellentesque vitae
              farer temper ultrices nulled
            </p>
            <button className="primary-btn w-[180px]">Get Start Now</button>
          </div>
        </div>
        <div className="flex justify-center gap-[100px] px-5 ">
          <div>
            <Verticleswiper1 details={Swiperdata} />
          </div>
          <div>
            <Verticleswiper2 details={Swiperdata} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
