import React from "react";

const PageHeader = (props) => {
  return (
    <div
      class="h-[400px] flex justify-center items-center"
      style={{
        backgroundImage: "url('/pageheader.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="flex flex-col gap-2 justify-center items-center">
        <p class="meri-bold text-[48px] md:text-[64px] text-white">
          {props.title}
        </p>

        <div class="flex meri-bold  text-white  text-[24px] md:text-[32px] gap-2 items-center">
          <p>Home</p>
          <p>{" > "}</p>
          <p class="text-[#FFD70A]">{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
