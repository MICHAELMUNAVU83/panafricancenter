"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sliderBG from "@/public/assets/slider-background.svg";

// Import required modules for Swiper

import { Navigation, Pagination } from "swiper/modules";

export default function MySwiper() {
  const slidesData = [
    {
      title: "Mission",
      content:
        "To drive the realization of a peaceful, united, and fully integrated Africa and its global diaspora.",
    },
    {
      title: "Vision",
      content:
        "We seek to realize a united, peaceful, and prosperous Africa where all citizens are empowered and engaged in the continent's development, leveraging their skills and talents to build a sustainable future.",
    },
    {
      title: "Values",
      content:
        "Unity, Empowerment, Sustainability, Cultural Heritage, Innovation",
    },
    {
      title: "Principles",
      content:
        "Unity and Integration , Citizen-Centered Development , Strategic Innovation ,	Collaboration: ",
    },
  ];

  return (
    <section>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="bg-[url('/assets/slider-background.svg')] bg-cover items-center bg-center h-[400px] px-20"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full text-center">
                <div className="text-white">
                  <h2 className="text-3xl  libre-baskerville-bold font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="md:text-lg md:w-[70%] w-[90%] text-sm m-auto josefin-sans-regular">
                    {slide.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
