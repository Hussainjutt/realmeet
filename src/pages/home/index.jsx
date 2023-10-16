import React from "react";
import Banner from "./section1/Banner";
import Section2 from "./section2/Section2";
import Section4 from "./section4/index";
import Section3 from "./section3/Section3";

const index = () => {
  return (
    <>
      <Banner /> {/* //Section 1 */}
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default index;
