import React from "react";
import "./Searchform.css";
import { Link } from "react-router-dom";

const SearchForm = () => {
  return (
    <>
      <p className="text-center text-slate-800 text-[22px] font-normal font-['BR Omega']">
        Member Type
      </p>
      <div className="Searchbox mt-4">
        <form>
          <div className="member">
            <div className="inputFields">
              <input type="radio" name="member" id="" />
              Free Member
            </div>
            <div className="inputFields">
              <input type="radio" name="member" id="" />
              premium Member
            </div>
            <div className="inputFields">
              <input type="radio" name="member" id="" />
              All Member
            </div>
          </div>
          <div className="my-3 flex justify-center border-b-2 py-3">
            <p className="opacity-50 text-slate-800 text-xs font-normal font-['BR Omega'] ">
              *Your paid or Premium Membership gives you more property to find
              your best mate and his valuable information.
            </p>
            <Link
              to="/"
              className="text-pink-600 text-xs font-normal font-['BR Omega']"
            >
              Change Membership {">"}
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="age">Age Area</label>
              <div className="rounded border border-gray-200 flex mr-3 gap-4 items-center w-full">
                <label htmlFor="from" className="pl-2">
                  From
                </label>
                <select
                  name="age"
                  id="age"
                  className=" border-l-0 border-b-0 border-t-0 border-r-[1px] border-gray-200"
                >
                  <option defaultValue value="12">
                    12
                  </option>
                  <option value="15">15</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                </select>
                <label htmlFor="to">To</label>
                <select name="age" id="age" className="border-none">
                  <option defaultValue="12" value="12">
                    12
                  </option>
                  <option value="15">15</option>
                  <option value="18">18</option>
                  <option value="20">20</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Member Id</label>
              <input type="text" className="rounded border border-gray-200" />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Martial Status</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Religion</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="single">Muslim</option>
                <option value="Married">Non-Muslim</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">caste</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Jutt</option>
                <option value="Married">Rajpoot</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Martial Status</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Jutt</option>
                <option value="Married">Rajpoot</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center gap-4 my-4">
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Mother Tougue</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Urdu</option>
                <option value="Married">English</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Martial Status</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Teaching</option>
                <option value="Married">Developer</option>
                <option value="Married">Labour</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">Country</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Pakistan</option>
                <option value="Married">India</option>
              </select>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">State</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Islamic Republic of Pakistan</option>
                <option value="Married">UAE</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member-id">City</label>
              <select name="" id="" className="rounded border border-gray-200">
                <option value="">choose one</option>
                <option value="single">Faisalabad</option>
                <option value="Married">Lahore</option>
                <option value="Married">Karachi</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="age">Height Area</label>
              <div className="rounded border border-gray-200 flex mr-3 gap-4 items-center w-full">
                <label htmlFor="from" className="pl-2">
                  Min
                </label>
                <select
                  name="age"
                  id="age"
                  className=" border-l-0 border-b-0 border-t-0 border-r-[1px] border-gray-200"
                >
                  <option defaultValue value="4'4''">
                    4'4"
                  </option>
                  <option value="5'7''">5'7"</option>
                  <option value="6'2''">6'2"</option>
                </select>
                <label htmlFor="to">Max</label>
                <select name="age" id="age" className="border-none">
                  <option value="7'1''">7'1"</option>
                  <option value="5'2''">5'2"</option>
                  <option value="6'6''">6'6"</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-cstm_primary_pink-100 rounded-[5px] text-center py-[5px] mt-5">
            <button
              type="submit"
              className="text-white text-lg font-normal font-['BR Omega'] tracking-tight"
            >
              Search Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
