import React from "react";
import Banner from "./section1/Banner";
import Section2 from "./section2/Section2";
import Section4 from "./section4/index";
import Section3 from "./section3/Section3";
import Section6 from "./section6/Section6";
import Section5 from "./section5/Section5";
import Section7 from "./section7/Section7";
const index = () => {
  return (
    <>
      <Banner /> {/* //Section 1 */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 title={"Membership Plans"} />
      <Section7 />
    </>
  );
};

export default index;
