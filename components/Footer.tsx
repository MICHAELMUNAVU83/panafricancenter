import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#A90100] text-white mt-16 py-12 ">
      <div className="w-[90%] mx-auto grid grid-cols-1 gap-12 md:grid-cols-4 ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img
                src="/assets/full_logo.png"
                className="h-[100px] object-contain"
                alt="logo"
              />
            </div>
          </div>
          <p className="libre-baskerville-regular">
            A Peaceful, United, and Integrated Africa and its Global Diaspora'
          </p>
        </div>

        <div className="flex  items-start">
          <div className="flex josefin-sans-regular flex-col gap-3">
            <p className="libre-baskerville-bold  text-[30px]">Pages</p>

            <Link href="#">Home</Link>

            <Link href="#about">About</Link>
            <Link href="#programs">Programs</Link>
            <Link href="#news">News & Events</Link>
          </div>
        </div>
        <div className="flex josefin-sans-regular flex-col gap-2">
          <p className="libre-baskerville-bold  text-[30px]">Contact</p>
          <p>House No. J16, Jamhuri Crescent, Ngong Road +254-718-345-995</p>

          <p>info@panafricancenter.africa</p>
        </div>

        <div className="flex items-start flex-col gap-4">
          <p className="libre-baskerville-bold  text-[30px]">Social Media</p>
          <div className="flex gap-3 items-center ">
            <RiFacebookCircleLine size={23} /> <p>Facebook</p>
          </div>
          <div className="flex gap-3 items-center ">
            <FaTwitter size={23} /> <p>Twitter</p>
          </div>
          <div className="flex gap-3 items-center">
            <BsInstagram size={23} /> <p>Instagram</p>
          </div>
          <div className="flex gap-3 items-center">
            <FaLinkedin size={23} /> <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
