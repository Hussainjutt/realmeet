import React from "react";
import Sec4frontimg from "../../../assets/images/sec4-front-img.png";
import Sec4backimg from "../../../assets/images/sec4-back-img.jpg";
import Sec4_1 from "../../../assets/SVG/sec4-1.svg";
import Sec4_2 from "../../../assets/SVG/sec4-2.svg";
import Sec4_3 from "../../../assets/SVG/sec4-3.svg";

const index = () => {
  return (
    <>
      <div className="w-[80%] m-auto">
        <h2 className="text-slate-800 text-[36px] font-normal font-['BR Omega'] leading-[54px]">
          Lorem dolor amet consectetur adipiscing. Commode acceptor bandit
          torpor meanness egoists mathis. ucibus laces ultrices acned seed.
        </h2>
        <div className="flex justify-center gap-[70px] h-[450px] my-[50px]">
          <div className="relative w-[300px]">
            <div className="absolute top-8">
              <img
                src={Sec4backimg}
                alt=""
                className="w-[240px] h-[330px] rotate-[-30deg] z-0 opacity-[0.5] bg-stone-300 rounded-[20px] object-right"
              />
            </div>
            <div className="w-[200px]">
              <img
                src={Sec4frontimg}
                alt=""
                className="absolute top-2 left-10 w-[300px] "
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <div className="border-b-[1px] pb-2 flex gap-3 items-center">
              <img src={Sec4_1} alt="" />
              <p className="text-[#FA4A6F] text-rose-500 text-xl font-normal font-['BR Omega'] leading-[27px] ">
                100% Screened Profiles
              </p>
            </div>
            <div className="border-b-[1px] pb-2 flex gap-3 items-center">
              <img src={Sec4_2} alt="" />
              <p className="text-[#FA4A6F] text-rose-500 text-xl font-normal font-['BR Omega'] leading-[27px]">
                Verification by Personal Visit
              </p>
            </div>
            <div className="border-b-[1px] pb-2 flex gap-3 items-center">
              <img src={Sec4_3} alt="" />
              <p className="text-[#FA4A6F] text-rose-500 text-xl font-normal font-['BR Omega'] leading-[27px]">
                Strong Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
