import React from "react";
import MemberData from "./MemberData";
import ActiveMember from "./ActiveMember";

const Section2 = () => {
  return (
    <>
      <ActiveMember datacard={MemberData} />
      {/* <ActiveMember /> */}
    </>
  );
};

export default Section2;
