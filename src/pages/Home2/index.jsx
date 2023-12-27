

import React from "react";
import Loginpage from "./loginpage/Loginpage";

import React from 'react'
import Loginpage from './loginpage/Loginpage'
import  Forgotpass  from './ForgotPassword/Forgotpass'
import IndexProfile from "../Home2/Profile/indexProfile";
const index = () => {
  return (
    <>
    <Loginpage/>
    <Forgotpass/>
    {/* <Profileable/> */}
    <IndexProfile />
    </>
  );
};

export default index;
