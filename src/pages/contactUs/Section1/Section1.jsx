import React from "react";
import Contactform from "./Contactform";
import Contactinfo from "./Contactinfo";

const Section1 = () => {
  return (
    <>
      <div className="flex justify-center my-10">
        <div className="w-[550px] ">
          <h3 className="text-center text-black text-[40px] font-normal font-['BR Omega']">
            How we can help you
          </h3>
          <p className="text-center text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px]">
            Fill out the form and a member from our team will get back to you
            with 24 hours, of here more way to get in touch
          </p>
        </div>
      </div>
      <div className="flex justify-evenly my-[30px]">
        <Contactinfo />
        <Contactform />
      </div>
    </>
  );
};

export default Section1;
