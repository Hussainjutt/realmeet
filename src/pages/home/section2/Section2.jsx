import React from "react";
import Card from "../section2/Card";
import CardData from "./CardData";
const Section2 = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <h2 className="text-slate-800 text-[40px] font-normal font-['BR Omega'] leading-[54px] mt-[50px] mb-[25px]">
          We bringing people together <br />
          with our platform in very easy way
        </h2>
      </div>
      <div>
        <Card details={CardData} />
      </div>
    </>
  );
};

export default Section2;
