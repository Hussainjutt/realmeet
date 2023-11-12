import React from "react";
import Loginform from "./LoginForm";
import Loginpageimg from "../../../assets/images/Loginpageimg.png";

const Loginpage = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mb-16 ">
        <div className="my-12">
          <h2 className="text-center text-black text-[40px] font-semibold font-['BR Omega']">
            Welcome Back!
          </h2>
          <p className="text-center text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px]">
            World number #1 matrimony site
          </p>
        </div>
        <div className=" bg-purple-50 rounded-[30px] ">
          <div className="flex justify-between ">
            <div className="bg-[#FFC4B2] rounded-tl-[30px] rounded-bl-[30px] w-[500px] ">
              <img className="w-[120%] object-cover" src={Loginpageimg} alt="" />
            </div>
            <div>
              <Loginform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
