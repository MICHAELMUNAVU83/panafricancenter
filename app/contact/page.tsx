"use client";

import React from "react";
import { motion } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const sendEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};

const callPhone = (phone: string) => {
  window.location.href = `tel:${phone}`;
};

const Contact = () => {
  return (
    <>
      <motion.section
        className="w-full h-auto lg:h-screen flex items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          <motion.div
            className="w-full flex flex-col shadow-md p-8 rounded-3xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-red-600 text-[24px] md:text-[30px] lg:text-[40px] font-bold">
              We'd love to hear from you!
            </h1>
            <div className="flex flex-col space-y-4 mt-4">
              <p
                className="text-green-600 text-[14px] md:text-[18px] lg:text-[22px] font-semibold cursor-pointer"
                onClick={() =>
                  openLink(
                    "https://www.google.com/maps?q=Wana+Ndege+Flats,+Kirichwa+Lane"
                  )
                }
              >
                <FaMapLocation className="inline-block mr-2" />
                Address: Wana Ndege Flats, Kirichwa Lane
              </p>

              <p
                className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold cursor-pointer"
                onClick={() => sendEmail("info@cpaa.org")}
              >
                <IoMdMail className="inline-block mr-2" />
                Email: info@cpaa.org
              </p>

              <p
                className="text-[14px] md:text-[18px] lg:text-[22px] font-semibold cursor-pointer"
                onClick={() => callPhone("+254733374727")}
              >
                <FaPhoneAlt className="inline-block mr-2" />
                Phone: +254 733 374 727
              </p>
            </div>

            <div className="mt-4">
              <h2 className="text-[14px] md:text-[22px] lg:text-[28px] font-bold">
                Follow us on Social Media
              </h2>
              <ul className="flex space-x-4 mt-2">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    title="Twitter"
                  >
                    <FaTwitter className="text-blue-500 text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    title="Instagram"
                  >
                    <FaInstagram className="text-pink-500 text-2xl" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-600 text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="w-full flex"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <form
              action="https://formspree.io/f/xvgplpky"
              method="post"
              className="w-full flex flex-col gap-4 lg:gap-2 items-center justify-center"
            >
              <div className="flex items-start md:flex-row flex-col gap-4 justify-between w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black text-[19px] font-semibold">
                    First Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your first name"
                    name="firstName"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black text-[19px] font-semibold">
                    Last Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your last name"
                    name="lastName"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start justify-between md:flex-row flex-col gap-4 w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black text-[19px] font-semibold">Email</p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black text-[19px] font-semibold">
                    Phone Number
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your phone number"
                    name="phoneNumber"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-1 w-[100%]">
                <p className="text-black text-[19px] font-semibold">Message</p>
                <textarea
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your message"
                  name="message"
                  required
                />
              </div>

              <div className="w-[100%] justify-end flex mt-4">
                <button
                  type="submit"
                  className="text-center text-white px-5 py-3 rounded-[5px] bg-[#CD3738]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
