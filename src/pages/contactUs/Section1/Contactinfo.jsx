import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../../assets/SVG/contact-info-icon1.svg";
import Icon2 from "../../../assets/SVG/contact-info-icon2.svg";
import Icon3 from "../../../assets/SVG/contact-info-icon3.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contactinfo = () => {
  return (
    <>
      <div>
        <div className="">
          <img src={Icon1} alt="" />
          <h4 className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            Chat us on Whatsup:
          </h4>
          <p className="text-slate-800 text-base font-normal font-['BR Omega'] leading-snug">
            Mon-Fri from 8:00 am to 5:00pm
          </p>
          <p className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            +00 123 4567
          </p>
        </div>
        <div className="my-5">
          <img src={Icon2} alt="" />
          <h4 className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            Chat us on Whatsup:
          </h4>
          <p className="text-slate-800 text-base font-normal font-['BR Omega'] leading-snug">
            Mon-Fri from 8:00 am to 5:00pm
          </p>
          <p className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            +00 123 4567
          </p>
        </div>
        <div className="">
          <img src={Icon3} alt="" />
          <h4 className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            Chat us on Whatsup:
          </h4>
          <p className="text-slate-800 text-base font-normal font-['BR Omega'] leading-snug">
            Mon-Fri from 8:00 am to 5:00pm
          </p>
          <p className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px] py-3">
            +00 123 4567
          </p>
        </div>
        <div className="my-5">
          <p className="text-gray-800 text-xl font-normal font-['BR Omega'] leading-[27px]">
            Follow on Social Media:
          </p>
          <div className=" flex justify-start gap-5 my-5">
            <Link to="https://facebook.com">
              <FaFacebookF />
            </Link>
            <Link to="https://facebook.com">
              <FaTwitter />
            </Link>
            <Link to="https://facebook.com">
              <FaInstagram />
            </Link>
            <Link to="https://facebook.com">
              <FaLinkedinIn />
            </Link>
            <Link to="https://facebook.com">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
