import React from "react";

const Supporters = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center  gap-5">
      <h1 className="text-[#525560] uppercase text-center libre-baskerville-regular text-[22px] ">
        Our supporters
      </h1>
      <div className="flex flex-wrap justify-between items-center w-[90%] m-auto py-2">
        <img
          src="/assets/sup1.png"
          alt="supporter1"
          className="flex justify-center items-center"
        />
        <img
          src="/assets/sup2.png"
          alt="supporter1"
          className="flex justify-center items-center"
        />
        <img
          src="/assets/sup3.png"
          alt="supporter1"
          className="flex justify-center items-center"
        />
        <img
          src="/assets/sup4.png"
          alt="supporter1"
          className="flex justify-center items-center"
        />
      </div>
    </div>
  );
};

export default Supporters;
