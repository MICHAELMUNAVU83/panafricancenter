import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#A90100] text-white mt-16 py-12 ">
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img
                src="/assets/logo.svg"
                className="w-16 object-contain"
                alt="logo"
              />
              <p className="libre-baskerville-bold  text-[24px]">
                Center For Pan Africa
              </p>
            </div>
          </div>
          <p className="libre-baskerville-regular">
            A Peaceful, United, and Integrated Africa and its Global Diaspora'
          </p>

          <div className="flex items-center gap-4">
            <div className="flex text-sm gap-1 items-center">
              <RiFacebookCircleLine size={23} />
            </div>
            <div className="flex gap-1 text-sm items-center">
              <FaTwitter size={23} />
            </div>
            <div className="flex items-center">
              <BsInstagram size={23} />
            </div>
            <div className="flex items-center">
              <FaLinkedin size={23} />
            </div>
          </div>
        </div>

        <div className="flex gap-24 w-[100%] items-start">
          <div className="flex josefin-sans-regular flex-col gap-2">
            <p className="libre-baskerville-bold  text-[24px]">Pages</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Programmes</p>
            <p>Events</p>
          </div>
          <div className="flex josefin-sans-regular flex-col gap-2">
            <p className="libre-baskerville-bold  text-[24px]">Service</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Programmes</p>
            <p>Events</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="libre-baskerville-bold  text-[24px]">Maps Location</p>
          <img
            src="/assets/maps.png"
            alt="map"
            className=" h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
