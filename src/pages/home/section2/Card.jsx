import React from "react";
const Card = (props) => {
  return (
    <>
      <h1>Section 2 Card</h1>
      <div className="flex flex-wrap justify-center gap-[60px] my-[40px]">
        {props.details.map((value, index) => (
          <div className="w-[250px]" key={index}>
            <div>
              <img
                src={value.img}
                alt=""
                className="object-cover rounded-t-md mb-2"
              />
            </div>
            <div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
