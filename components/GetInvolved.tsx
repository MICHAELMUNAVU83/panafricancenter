import React from "react";
import { DATA } from "@/data/Data";
import GetInvolvedTile from "./GetInvolvedTile";
import memberBG from "../public/assets/member-background.jpeg";

function GetInvolved() {
  return (
    <section id="programs">
      <div className="py-14">
        <div className=" text-center mb-8">
          <h3 className="text-[#A90100] uppercase libre-baskerville-regular text-sm lg:text-[18px] ">
            Get involved now
          </h3>
          <h1 className="text-[#525560] md:text-[34px] text-[28px]  libre-baskerville-regular  ">
            Make a difference today
          </h1>
        </div>

        <div className="m-auto md:w-[80%] w-[90%] grid gap-4 grid-cols-1   md:grid-cols-3">
          {DATA.getInvolved.map((item, index) => {
            let tileProps = {};

            // Customize styles for each tile based on the title or index
            switch (item.title) {
              case "Advocacy":
                tileProps = {
                  bgColor: "bg-[#219D8066]/60",
                  textColor: "text-white",
                  headingColor: "text-white",
                  buttonStyle: "bg-[#219D80] text-white",
                  buttonText: "Join",
                };
                break;

              case "Consciousness Building":
                tileProps = {
                  bgColor: "bg-[#CD373866]/80",
                  textColor: "text-white",
                  headingColor: "text-white",
                  buttonStyle: "bg-red-500 text-white",
                  buttonText: "Join",
                };
                break;

              case "Strategic Interventions":
                tileProps = {
                  bgImage: memberBG.src,
                  textColor: "text-white",
                  headingColor: "text-white",
                  buttonStyle: "text-white border-[1px] border-white",
                  buttonText: "Join",
                };
                break;
            }

            return (
              <GetInvolvedTile
                key={index}
                title={item.title}
                description={item.description}
                iconSrc={item.icon}
                {...tileProps}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;
