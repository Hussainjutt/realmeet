import React from "react";
import Profileimg from "../../../assets/images/profileimg.jpg";
import Profilebanner from "../../../assets/images/profilebanner.png";
import FlagUS from "../../../assets/images/flag.png";
<<<<<<< HEAD
import Profileicon from "../../../assets/SVG/ProfileFrame.svg";
=======
import Profileicon from "../../../assets/SVG/ProfileFrame.jpeg";
>>>>>>> acea3e493f14ec93f075cf632461be36cccc4680
import { FaRegEnvelope } from "react-icons/fa6";
import { FaListUl } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div
        className=" w-[80%] h-[550px] mx-auto rounded-[20px] relative border-[1px] border-gray-200 my-[50px]"
        // style={{ backgroundImage: `url(${Profilebanner})` }}
      >
        <img
          src={Profilebanner}
          alt=""
          className="object-cover object-bottom"
        />

        <div className=" flex justify-between gap-10  ">
          <div className=" absolute top-[100px] left-5 ">
            <div className="flex flex-col gap-10">
              <div>
                <div>
                  <img
                    src={Profileimg}
                    alt=""
                    className="w-[260px] h-[260px] rounded-[90px] border-8 border-white"
                  />
                  <div className="flex gap-4">
                    <img src={Profileicon} alt="" />
                    <p>
                      <span className="text-zinc-500 text-base font-normal font-['BR Omega']">
                        Profile Match :
                      </span>
                      <span className="text-slate-800 text-base font-normal font-['BR Omega']">
                        {" "}
                      </span>
                      <span className="text-gray-800 text-base font-normal font-['BR Omega']">
                        80%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border-gray-200 border-[1px] py-1 px-4 flex gap-2 items-center rounded-[3px]">
                  <i>
                    <FaRegEnvelope />
                  </i>
                  <button className=" bg-white ">Message</button>
                </div>
                <div className="bg-gray-200  py-1 px-4 flex gap-2 items-center rounded-[3px] ">
                  <i>
                    <FaListUl />
                  </i>
                  <button className="  ">Mark Shortlist</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%] absolute top-[42%] right-2">
            <div className=" flex justify-between pb-[25px] border-b-2 border-gray-200 my-5 ">
              <div className="flex gap-6">
                <div className="flex flex-col justify-evenly">
                  <div className="flex text-white ">
                    <span className="bg-[#FF8935] py-2 pl-1 ">
                      <AiOutlineThunderbolt />
                    </span>
                    <p className="  text-xs font-[220px] font-['BR Omega'] uppercase  bg-[#FF8935] py-2 pr-2">
                      Premium
                    </p>
                  </div>
                  <div>
                    <h3 className="text-black text-xl font-bold font-['BR Omega']">
                      Janny Cooper
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={FlagUS}
                      alt=""
                      className="w-[26.16px] h-[16.69px] rounded-sm"
                    />
                    <p className="ml-2 text-zinc-500 text-base font-normal font-['BR Omega']">
                      New York, United State
                    </p>
                    <p>
                      <span className="text-zinc-500 text-base font-normal font-['BR Omega'] ml-3">
                        Member ID:
                      </span>
                      <span className="text-slate-800 text-base font-normal font-['BR Omega']">
                        {" "}
                      </span>
                      <span className="text-cstm_primary_pink-100 text-base font-normal font-['BR Omega']">
                        34456
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-center ">
                  <div className="bg-white p-[6px] rounded-[8px] flex flex-col items-center border-gray-100 border-[2px]">
                    <MdOutlineFavoriteBorder className=" text-[20px] " />
                    <p>Interest</p>
                  </div>
                  <div className="bg-white p-[6px] rounded-[8px] flex flex-col items-center border-gray-100 border-[2px]">
                    <BiBlock className=" text-[20px] " />
                    <p>Report</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className=" 1st ">
                <div>
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Age
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    30 Years
                  </p>
                </div>
                <div className="mt-5">
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Caste
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    Sunni
                  </p>
                </div>
              </div>
              <div className="2nd">
                <div>
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Height
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    5'6''
                  </p>
                </div>
                <div className="mt-5">
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Language
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    {" "}
                    English
                  </p>
                </div>
              </div>

              <div className="3rd ">
                <div>
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Religion
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    Islam
                  </p>
                </div>

                <div className="mt-5">
                  <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                    Maritalstatus
                  </p>
                  <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                    Single
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
