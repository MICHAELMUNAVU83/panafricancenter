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
      content:
        "A Peaceful, United, and Integrated Africa and its Global Diaspora",
      image: "/assets/bg1.png",
    },
    {
      title: "Vision",
      content:
        "To realize a peaceful, united, and integrated Africa, alongside its global diaspora, by promoting collective strength and shared progress.",
      image: "/assets/bg1.png",
    },
    {
      title: "Values",
      content:
        "To realize a peaceful, united, and integrated Africa, alongside its global diaspora, by promoting collective strength and shared progress.",
      image: "/assets/bg1.png",
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
          className="w-[100%] cursor-pointer items-center bg-center h-[80vh] "
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex text-white flex-col justify-center items-center gap-4  bg-cover w-[100%] h-[100%] text-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <p className="libre-baskerville-bold w-[80%] md:w-[50%] text-[56px]">
                  {slide.title}
                </p>
                <p className="josefin-sans-regular   w-[80%] md:w-[50%] text-[24px]">
                  {slide.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex flex-col gap-5">
          <h1 className="text-[#525560] text-center libre-baskerville-regular text-[22px] ">
            Our supporters
          </h1>
          <div className="grid grid-cols-5">
            <img src="/assets/sup1.png" alt="supporter1" />
            <img src="/assets/sup2.png" alt="supporter1" />
            <img src="/assets/sup3.png" alt="supporter1" />
            <img src="/assets/sup4.png" alt="supporter1" />
            <img src="/assets/sup5.png" alt="supporter1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesc;
