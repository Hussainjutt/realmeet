import React from "react";
import "./Searchform.css";
import { Link } from "react-router-dom";
import { Button, Input, Select, Space } from "antd";

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
          <div className="flex justify-between">
            <div>
              <label htmlFor="age">Age Area</label>
              <Space.Compact>
                <Select type="number" defaultValue="12" className="Optgroup">
                  <Select.Option value="17">17</Select.Option>
                  <Select.Option value="19">19</Select.Option>
                </Select>
                <Select defaultValue="32" type="number" className="Optgroup">
                  <Select.Option value="23">23</Select.Option>
                  <Select.Option value="24">24</Select.Option>
                </Select>
              </Space.Compact>
            </div>
            <div>
              <label htmlFor="member-id">Member Id</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="member-id">Martial Status</label>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchForm;
