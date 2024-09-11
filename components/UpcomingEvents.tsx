import React from "react";
import { DATA } from "@/data/Data";
import { FaArrowRightLong } from "react-icons/fa6";

function UpcomingEvents() {
  return (
    <section id="events">
      <div className="max-w-6xl px-5 lg:mx-auto py-8 ">
        <div className="flex flex-col text-[#1D2130] libre-baskerville-regular text-[40px] leading-10  gap-1 ">
          <p>Upcoming Event</p>
        </div>

        <div className="grid grid-cols-1 gap-8 py-10">
          {DATA.upcoming_events.map((event, index) => (
            <div className="w-[100%] text-white p-2 flex md:flex-row flex-col  justify-between items-start md:items-center py-8 gap-12 bg-[#CD3738] rounded-[30px]">
              <div className="flex flex-col gap-4">
                <p className="roboto-regular font-medium  text-lg md:text-xl">
                  {event.title}
                </p>
                <p className="roboto-regular">{event.venues}</p>
              </div>
              <p className="roboto-regular">{event.dates}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
