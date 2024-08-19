import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <section className="bg-[#060] hidden md:block  p-4">
      <div className="flex mx-28 justify-between">
        <div className="flex gap-10 text-[#fff]">
          <div className="flex text-sm gap-1 items-center">
            <IoMdMail size={23} />
            <p className="">Panafricanaffairs@gmail.com</p>
          </div>
          <div className="flex gap-1 text-sm items-center">
            <FaLocationDot size={23} />
            <p className="">3146 Koontz Lane, Kilimani</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaPhoneAlt size={23} />
            <p className="">(+254)74136300</p>
          </div>
        </div>
        <div className="flex gap-5 text-[#fff]">
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
    </section>
  );
};

export default NavbarTop;
