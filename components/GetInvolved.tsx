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
          <h1 className="text-[#525560] md:text-[48px] text-[32px]  libre-baskerville-regular  ">
            Make a difference today
          </h1>
        </div>

        <div className="m-auto w-[90%]  md:w-[80%] grid gap-12 grid-cols-1 md:grid-cols-3">
          {DATA.getInvolved.map((item, index) => {
            let tileProps = {};

            // Customize styles for each tile based on the title or index
            switch (item.title) {
              case "Become a volunteer":
                tileProps = {
                  bgColor: "bg-[#006600]",
                  textColor: "text-[#FFFFFFD9]",
                  buttonStyle: "bg-[#A90100] text-white",
                  buttonText: "Join Us Now",
                };
                break;

              case "Donate to support":
                tileProps = {
                  bgColor: "bg-red-500",
                  textColor: "text-[#FFFFFFD9]",
                  buttonStyle: "border border-white text-white",
                  buttonText: "Donate Today",
                };
                break;

              case "Become a Member":
                tileProps = {
                  bgImage: memberBG.src,
                  textColor: "text-white",
                  buttonStyle: "bg-red-500 text-white",
                  buttonText: "Learn More",
                };
                break;

              default:
                tileProps = {
                  bgColor: "",
                  textColor: "text-[#FFFFFFD9]",
                  buttonStyle: "bg-blue-500 text-white",
                  buttonText: "Learn More",
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
