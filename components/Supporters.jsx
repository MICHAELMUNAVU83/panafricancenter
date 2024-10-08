"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
const Supporters = () => {
  const slides = [
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
  ];
  return (
    <div className="mt-10  md:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center  gap-5">
      <h1 className="text-[#525560] uppercase text-center libre-baskerville-regular text-[22px] ">
        Our Partners
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        className="w-[100%] cursor-pointer flex justify-center items-center  "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide} alt="slide" className="object-cover h-[100px] " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Supporters;
