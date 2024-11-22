"use client";

import { useState } from "react";
import { EventData } from "@/app/shared/Data";
import EventTile from "./Home/EventTile";

export default function EventComponent() {
  const sortedEvents = [...EventData].sort(
    (a, b) => new Date(b.sortableDate) - new Date(a.sortableDate)
  );

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const pastEvents = sortedEvents.slice(1);
  const paginatedEvents = pastEvents.slice(
    paginationIndex,
    paginationIndex + 2
  );

  const handleNextPagination = () => {
    if (paginationIndex + 2 < pastEvents.length) {
      setPaginationIndex(paginationIndex + 2);
    } else {
      setPaginationIndex(0);
    }
  };

  const handleEventClick = (index) => {
    setFeaturedIndex(index + 1);
    setPaginationIndex(0);
  };

  return (
    <section className="w-full h-auto py-8">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <div>
          <h1 className="text-[20px] md:text-[30px] lg:text-[48px]">Events</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="col-span-1">
            <EventTile
              headerTag={sortedEvents[featuredIndex].headerTag}
              title={sortedEvents[featuredIndex].title}
              subTitle={sortedEvents[featuredIndex].subTitle}
              desc={sortedEvents[featuredIndex].desc}
              date={sortedEvents[featuredIndex].date}
              venue={sortedEvents[featuredIndex].venue}
              btn={sortedEvents[featuredIndex].btn}
              imgRef={sortedEvents[featuredIndex].imgRef}
            />
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {paginatedEvents.map((data, index) => (
              <div
                key={data.id}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleEventClick(index + paginationIndex)}
              >
                <EventTile
                  headerTag={data.headerTag}
                  title={data.title}
                  subTitle={data.subTitle}
                  desc={data.desc}
                  date={data.date}
                  venue={data.venue}
                  btn={data.btn}
                  imgRef={data.imgRef}
                />
              </div>
            ))}
          </div>
        </div>

        {pastEvents.length > 2 && (
          <button
            className="mt-4 mx-auto bg-black text-white px-4 py-2 lg:px-8 lg:py-4 rounded-lg hover:bg-red-600"
            onClick={handleNextPagination}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
}
