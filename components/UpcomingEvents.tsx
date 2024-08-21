import React from "react";
import { DATA } from "@/data/Data";
import { FaArrowRightLong } from "react-icons/fa6";

function UpcomingEvents() {
  return (
    <section>
      <div className="max-w-6xl px-5 lg:mx-auto py-8 ">
        <div className="flex flex-col text-[#1D2130] libre-baskerville-regular text-[40px] leading-10  gap-1 ">
          <p>Our Upcoming</p>
          <p>Events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
          {DATA.upcoming_events.map((event, index) => (
            <div className="w-[100%] p-2 flex justify-center items-center py-8 gap-12 bg-[#CD3738] rounded-[30px]">
              <div className="flex items-start gap-4 leading-8">
                <div className="flex flex-col text-[24px] text-white roboto-bold gap-1">
                  <p className="text-[40px]">13</p>
                  <p>SEP</p>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex roboto-regular text-white gap-4 items-center">
                    <p>Next Events</p>
                    <p className="bg-[#fff] h-[2px] w-20" />
                  </div>
                  <p className="libre-baskerville-bold  text-[24px] text-white">
                    A day with our wonderful children
                  </p>
                </div>
              </div>

              <div className="w-[50px] flex justify-center items-center h-[50px] bg-[#fff] rounded-full">
                <FaArrowRightLong className="text-[#006600]" size={30} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center ">
          <button className="text-center text-[#A90100] border p-3 mt-10  w-40 rounded-full border-[#A90100]">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
