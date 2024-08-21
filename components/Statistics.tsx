import React from "react";
import { DATA } from "@/data/Data";

function Statistics() {
  return (
    <section>
      <div className="max-w-6xl px-5 lg:mx-auto py-8 md:py-20">
        <div>
          <div className="flex items-center space-x-2">
            <h5 className="text-lg text-[#252A34] font-semibold">
              Our Fun Facts
            </h5>
            <div className="w-12 h-[2px] bg-[#A90100]"></div>
          </div>

          <h2 className="mt-4 md:text-[39px] text-[32px] w-[90%] lg:w-[50%] text-[#252A34] libre-baskerville-bold">
            We Believe that We can Save More Lives with you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {DATA.statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FDA538]/30 text-center space-y-3 py-6 px-10   justify-center flex flex-col"
            >
              <img
                src={stat.icon}
                alt={`${stat.icon} icon`}
                className="md:h-32  h-24 object-contain mx-auto"
              />
              <p className="md:text-[48px] text-[32px] text-[#252A34] font-extrabold">
                {stat.figure}+
              </p>
              <p className="text-[16px] w-[100%] josefin-sans-regular text-[#555555]">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
