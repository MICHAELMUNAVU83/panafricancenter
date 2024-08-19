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
        "To realize a peaceful, united, and integrated Africa, alongside its global diaspora, by promoting collective strength and shared progress.",
    },
    {
      title: "Vision",
      content:
        "To realize a peaceful, united, and integrated Africa, alongside its global diaspora, by promoting collective strength and shared progress.",
    },
    {
      title: "Values",
      content:
        "To realize a peaceful, united, and integrated Africa, alongside its global diaspora, by promoting collective strength and shared progress.",
    },
  ];

  return (
    <section>
      <div className="py-20 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="bg-[url('../public/assets/slider-background.svg')] bg-cover items-center bg-center h-[400px] px-20"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-full text-center">
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-lg">{slide.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
