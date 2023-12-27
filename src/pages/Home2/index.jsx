<<<<<<< HEAD
import React from "react";
import Loginpage from "./loginpage/Loginpage";
import Forgotpass from "./ForgotPassword/Forgotpass";
import Indexprofile from "./Profile/index";
const index = () => {
  return (
    <>
      {/* <Loginpage /> */}
      {/* <Forgotpass /> */}
      <Indexprofile />
=======
import React from 'react'
import Loginpage from './loginpage/Loginpage'
import  Forgotpass  from './ForgotPassword/Forgotpass'
// import Profileable from './loginpage/Profileable'
import IndexProfile from "../Home2/Profile/indexProfile";
const index = () => {
  return (
    <>
    <Loginpage/>
    <Forgotpass/>
    {/* <Profileable/> */}
    <IndexProfile />

  
>>>>>>> acea3e493f14ec93f075cf632461be36cccc4680
    </>
  );
};

export default index;
