import React from "react";
import Forgotpassimg from "../../../assets/SVG/forgotpassword.svg";
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from "react-router-dom";

const Forgotpass = () => {
  return (
    <>
      <div className="my-9 w-[50%] mx-auto">
        <div className=" my-5 ">
          <div className="flex flex-col justify-center items-center  ">
            <img
              className="w-[90px] h-[78px]"
              src={Forgotpassimg}
              alt="forgotsvg"
            />
            <h2 className=" text-black text-[40px] font-normal font-['BR Omega']">
              Reset your Password
            </h2>
            <p className="  text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px]">
              Please enter the email address you’d like your password reset
              information sent to
            </p>
          </div>
        </div>
        <div className=" bg-purple-50 rounded-[30px] mt-16">
        <div className="w-[70%] mx-auto py-14">
            <form action="">
                <div >
                    <label className=" my-3 opacity-60 text-slate-800 text-sm font-normal font-['BR Omega']" htmlFor="">Email or Password*</label>
                </div>
                <input className=" my-3 w-full bg-white rounded border border-gray-200" type="email" placeholder="XYZ@gmail.com" name="" id="" />
                <div>
                <button className=" py-2 rounded-[5px] my-3 w-full bg-cstm_secondary_pink-100 text-center text-white text-lg font-normal font-['BR Omega'] tracking-tight">Send Password reset Link</button>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <BsArrowLeft/>
                    <Link to="/"  className="text-center text-gray-800 text-sm font-normal font-['BR Omega']">Back to Home page</Link>
                </div>
            </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpass;
