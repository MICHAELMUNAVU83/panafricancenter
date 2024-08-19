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
      <nav className="sm:hidden flex justify-between items-center px-5 py-5">
        <div>
          <img src="/assets/logo.svg" alt="logo" />
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
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"} px-5 py-3`}>
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
            <Link href="#" className="flex items-center gap-x-1">
              Shop
              <span>
                <img src="/assets/drop-down.svg" alt="drop-down" />
              </span>
            </Link>
          </li>
          <li>
            <Link href="#events" className="flex items-center gap-x-1">
              Events
              <span>
                <img src="/assets/drop-down.svg" alt="drop-down" />
              </span>
            </Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
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
      <nav className="hidden sm:flex justify-between mx-28 py-5 items-center">
        <div>
          <img src="/assets/logo.svg" alt="logo" />
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
              <Link href="#" className="flex items-center gap-x-1">
                Shop
                <span>
                  <img src="/assets/drop-down.svg" alt="drop-down" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="#events" className="flex items-center gap-x-1">
                Events
                <span>
                  <img src="/assets/drop-down.svg" alt="drop-down" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="#gallery">Gallery</Link>
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
            <img src="/assets/profile.svg" alt="profile" className="size-10" />
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
