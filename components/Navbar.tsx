"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Mobile Navbar */}
      <nav className="sm:hidden flex justify-between items-center px-5 ">
        <div>
          <img
            src="/assets/logo.jpg"
            alt="logo"
            className="h-[40px] object-contain"
          />
        </div>
        <div className="flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"} px-5 `}>
        <ul className="flex flex-col gap-y-3">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#programs">Programs</Link>
          </li>
          <li>
            <Link href="#news">News</Link>
          </li>
          <li>
            <Link href="#events">Events</Link>
          </li>
          <li>
            <Link href="#contact">Contact Us</Link>
          </li>

          <li className="flex gap-x-5 mt-5">
            <Link href="#">
              <img
                src="/assets/cart.svg"
                alt="shopping cart"
                className="size-10"
              />
            </Link>

            <Link href="#">
              <img
                src="/assets/profile.svg"
                alt="profile"
                className="size-10"
              />
            </Link>

            <Link href="#">
              <button className="bg-[#A90100] text-white p-2 rounded-3xl px-5 ">
                Donate Now
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden sm:flex justify-between mx-28 py-3  items-center">
        <div>
          <Link href="/">
            <img
              src="/assets/logo.jpg"
              alt="logo"
              className="h-[50px] object-contain"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-5">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#programs">Programs</Link>
            </li>
            <li>
              <Link href="#news">News</Link>
            </li>
            <li>
              <Link href="#events">Events</Link>
            </li>
            <li>
              <Link href="#contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-5">
          <Link href="#">
            <img
              src="/assets/cart.svg"
              alt="shopping cart"
              className="size-10"
            />
          </Link>

          <Link href="#">
            <button className="bg-[#A90100] text-white p-2 rounded-3xl px-5 ">
              Donate Now
            </button>
          </Link>
        </div>
      </nav>

      <hr className="w-full h-[2px] bg-[#CCCCCC]" />
    </header>
  );
};

export default Navbar;
