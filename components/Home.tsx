"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import sliderBG from "@/public/assets/slider-background.svg";

// Import required modules for Swiper

import { Autoplay, Pagination } from "swiper/modules";

const HomeDesc = () => {
  const slidesData = [
    {
      title: "Welcome to Center for Pan African Affairs ",
      content: "Towards a united,  peaceful and prosperous Africa.",
      image: "/assets/bg1.png",
    },
    {
      title: "Building Partnerships for a Stronger Africa",
      content:
        "Collaborating for Sustainable Development and Pan African Unity",
      image: "/assets/slider2.png",
    },
    {
      title: "Empowering Africa's Future Generations",
      content: "Engage, Educate, and Inspire for a United Continent",
      image: "/assets/slider3.png",
    },
  ];
  return (
    <div>
      <section>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-[100%] cursor-pointer items-center bg-center h-[90vh] "
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex text-white flex-col justify-center items-center gap-4  bg-cover w-[100%] h-[100%] text-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <p className="libre-baskerville-bold w-[80%] md:w-[50%] text-[32px] md:text-[56px]">
                  {slide.title}
                </p>
                <p className="josefin-sans-regular   w-[80%] md:w-[50%] text-[18px] md:text-[24px]">
                  {slide.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex flex-col justify-center items-center  gap-5">
          <h1 className="text-[#525560] uppercase text-center libre-baskerville-regular text-[22px] ">
            Our supporters
          </h1>
          <div className="flex flex-wrap justify-between items-center w-[90%] m-auto py-2">
            <img
              src="/assets/sup1.png"
              alt="supporter1"
              className="flex justify-center items-center"
            />
            <img
              src="/assets/sup2.png"
              alt="supporter1"
              className="flex justify-center items-center"
            />
            <img
              src="/assets/sup3.png"
              alt="supporter1"
              className="flex justify-center items-center"
            />
            <img
              src="/assets/sup4.png"
              alt="supporter1"
              className="flex justify-center items-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesc;
