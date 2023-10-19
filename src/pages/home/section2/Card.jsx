import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-[60px] my-[40px]">
        {props.details.map((value, index) => (
          <div
           key={index} className="w-[250px] border-solid border-[1px] rounded-[40px] border-transparent hover:border-[#FA4A6F] flex flex-col justify-start items-start p-[20px] gap-[20px] 
          "
           >
            <div className="text-[#FA4A6F] text-[40px] mb-5 ">
              <value.img />
            </div>
            <div>
              <h2 className="text-[#FA4A6F] text-[22px] mb-5">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
