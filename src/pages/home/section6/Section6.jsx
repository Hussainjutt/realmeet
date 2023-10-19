import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const Section6 = () => {
  return (
    <>
      <div className="w-[80%] mx-auto ">
        <h2 className="text-center text-slate-800 text-[40px] font-normal font-['BR Omega'] leading-[54px]">
          Membership Plans
        </h2>
        <p className="text-center text-slate-800 text-lg font-normal font-['BR Omega'] leading-[25.20px]">
          Upgrade your plan as per your customized requirements. With a paid{" "}
          <br />
          membership, you can seamlessly connect with your prospects and get{" "}
          <br />
          more responses. Here are some key benefits:
        </p>
        <div className="flex justify-center items-center gap-10 my-[50px]">
          <div className="p-8 bg-white rounded-[30px] border border-neutral-200 flex flex-col justify-around items-center gap-10">
            <div>
              <h3>
                <span className="text-cstm_secondary_pink-100 text-[50px] font-bold font-['BR Omega'] leading-[67.50px]">
                  0.00
                </span>
                <span className="text-neutral-400 text-base font-normal font-['BR Omega'] leading-snug">
                  / month
                </span>
              </h3>
              <h3 className="text-gray-800 py-5 text-xl font-normal font-['BR Omega'] leading-[27px]">
                Free Membership
              </h3>
              <div className="w-[407px] h-[0px] border border-rose-500"></div>
            </div>
            <div>
              <ul className="  text-slate-800 text-base font-normal font-['BR Omega'] leading-10">
                <li>Match, Chat & Meet</li>
                <li>5 Super Likes a week</li>
                <li>Hide Advertisements</li>
              </ul>
              <ul className="list-disc text-[#CDCDCD]  text-base font-normal font-['BR Omega'] leading-10">
                <li>1 Free Boost a month</li>
                <li>New Top Picks every day</li>
                <li>Message before Matching</li>
                <li>Prioritised Likes</li>
                <li>See the Likes you’ve sent in the last 7 days,</li>
              </ul>
            </div>
          </div>
          <div className="bg-purple-900 rounded-[30px]">
            <div>
              <p className="text-center text-white text-xl font-normal font-['BR Omega'] leading-[27px] py-[15px]">
                20% Off for yearly
              </p>
            </div>
            <div className="p-8 bg-white rounded-[30px] border border-cstm_secondary_pink-100 flex flex-col justify-around items-center gap-10">
              <div>
                <h3>
                  <span className="text-cstm_secondary_pink-100 text-[50px] font-bold font-['BR Omega'] leading-[67.50px]">
                    12.00
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['BR Omega'] leading-snug">
                    / month
                  </span>
                </h3>
                <h3 className="text-gray-800 py-5 text-xl font-normal font-['BR Omega'] leading-[27px]">
                  Premium Membership
                </h3>
                <div className="w-[407px] h-[0px] border border-rose-500"></div>
              </div>
              <div>
                <ul className="list-disc text-slate-800 text-base font-normal font-['BR Omega'] leading-10">
                  <li>Match, Chat & Meet</li>
                  <li>5 Super Likes a week</li>
                  <li>Hide Advertisements</li>
                  <li>1 Free Boost a month</li>
                  <li>New Top Picks every day</li>
                  <li>Message before Matching</li>
                  <li>Prioritised Likes</li>
                  <li>See the Likes you’ve sent in the last 7 days,</li>
                </ul>
              </div>
              <button
                type="button"
                className="text-white primary-btn w-full rounded-full px-5 text-center text-lg font-normal font-['BR Omega'] tracking-tight"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
