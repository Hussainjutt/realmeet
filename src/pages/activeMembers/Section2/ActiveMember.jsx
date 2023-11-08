import React from "react";
import activemember from ".././../../assets/images/activememberimg1.png";
import { IoMdContact } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
const ActiveMember = (props) => {
  return (
    <>
      <div className="flex  gap-9 flex-wrap justify-center">
        {props.datacard.map((value, index) => (
          <div className=" flex gap-7" key={index}>
            <div className="bg-[#fffdf9] border-gray-200 rounded-[20px] border-[1px] my-5 px-5 pb-4">
              <div className="flex justify-between pb-[25px] border-b-2 border-gray-200 my-5 ">
                <div className="flex gap-6">
                  <div>
                    <img
                      src={value.img}
                      alt=""
                      className="rounded-[40px] w-[155.64px] h-[175.52px]"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <div className="flex text-white ">
                      <span className="bg-[#FF8935] py-2 pl-1">
                        <AiOutlineThunderbolt />
                      </span>
                      <p className="  text-xs font-[220px] font-['BR Omega'] uppercase  bg-[#FF8935] py-2 pr-2">
                        {value.accounttype}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-black text-xl font-bold font-['BR Omega']">
                        {value.name}
                      </h3>
                    </div>
                    <div>
                      <p>
                        <span className="text-[#656875] text-base font-normal font-['BR Omega']">
                          {value.memberid}
                        </span>
                        <span className="text-slate-800 text-base font-normal font-['BR Omega']">
                          {" "}
                        </span>
                        <span className="text-cstm_primary_pink-100 text-base font-normal font-['BR Omega']">
                          {value.memberidvalue}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-5 items-center  ">
                      <div className="flex items-center bg-gray-200 p-1 rounded-[5px] ">
                        <IoMdContact />
                        <p className="text-neutral-800 text-xs font-normal font-['BR Omega'] leading-none pl-2 ">
                          {value.viewprofile}
                        </p>
                      </div>
                      <div className="flex items-center bg-gray-200 p-1 rounded-[5px]">
                        <AiOutlineUnorderedList />
                        <p className="text-neutral-800 text-xs font-normal font-['BR Omega'] leading-none pl-2">
                          {value.shortlist}
                        </p>
                      </div>
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

              <div className=" flex justify-around ">
                <div className=" 1st ">
                  <div>
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.age}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {value.agevalue}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.cast}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {value.castvalue}{" "}
                    </p>
                  </div>
                </div>
                <div className="2nd">
                  <div>
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.height}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {value.heightvalue}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.language}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {" "}
                      {value.languagevalue}
                    </p>
                  </div>
                </div>

                <div className="3rd ">
                  <div>
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.religion}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {value.religionvalue}
                    </p>
                  </div>

                  <div className="mt-5">
                    <p className="opacity-70 text-slate-800 text-base font-normal font-['BR Omega']">
                      {value.maritalstatus}
                    </p>
                    <p className="text-slate-800 text-xl font-normal font-['BR Omega']">
                      {value.maritalstatusvalue}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActiveMember;
