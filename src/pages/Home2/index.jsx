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

  
    </>
  )
}

export default index