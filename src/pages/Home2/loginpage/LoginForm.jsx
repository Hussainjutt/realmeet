import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <>
      <div className=" w-[500px] py-9   flex flex-col justify-center">
        
        <div className="w-[80%]">
        <h1 className=" text-center text-black text-3xl font-normal font-['BR Omega']">
          We always love to see you
        </h1>
          <form action="">
            <div className="flex flex-col justify-center gap-3">
              <div>
                <div>
                  <label className="opacity-60 text-slate-800 text-sm font-normal font-['BR Omega']" htmlFor="email">Email/Phone</label>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="w-full h-[32px] my-1"
                
                />
                <p className="opacity-40 text-slate-800 text-xs font-normal font-['BR Omega']">
                  *Use country code before number.
                </p>
              </div>
              <div>
                <div>
                  <label className="opacity-60 text-slate-800 text-sm font-normal font-['BR Omega']" htmlFor="">Your Password*</label>
                </div>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                  className="w-full h-[32px] my-1"
                />
                <div className=" flex justify-between">
                  <button className="text-gray-800 text-xs font-normal font-['BR Omega']">
                    Remember me
                  </button>
                  <button className="text-pink-600 text-xs font-normal font-['BR Omega'] underline">
                    Forget Password?
                  </button>
                </div>
              </div>
              <div >
                <button className=" p-[7px] text-white text-center w-full bg-pink-600 rounded-[5px]">
                  Login Now
                </button>
              </div>
            </div>
          </form>
          <div>
            <p className=" my-2 opacity-60 text-center text-slate-800 text-sm font-normal font-['BR Omega']">
              Or Login with
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
          <div className="bg-white flex justify-center items-center py-1 my-1">
            <FaFacebookF />
            <Link className="pl-3" to="https://facebook.com"> Sign in with Facebook </Link>
          </div>
          <div className="bg-white flex justify-center items-center py-1 my-1">
            <FaTwitter />{" "}
            <Link className="pl-3" to="https://twitter.com">Sign in with Twitter</Link>
          </div>
          <div className="bg-white flex justify-center items-center py-1 my-1">
            <FaGoogle />
            <Link className="pl-3" to="https://google.com"> Sign in with Google</Link>
          </div>
          <div className="flex justify-center ">
            <p className=" pr-3 opacity-60 text-slate-800 text-sm font-normal font-['BR Omega']">
              Don't have an account?
            </p>
            <Link className="text-pink-600 text-sm font-normal font-['BR Omega'] underline">
              Create Account
            </Link>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
