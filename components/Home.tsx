import React from "react";

const HomeDesc = () => {
  return (
    <div>
      <section className="lg:mx-28 p-4 mt-10 pb-8">
        <div className="flex md:flex-row flex-col gap-8 items-center ">
          <div>
            <h2 className="text-[#525560] md:text-[56px] text-[40px]  libre-baskerville-bold ">
              Welcome to Center for Pan African Affairs
            </h2>

            <p className="mt-4 text-[20px] text-[#525560]">
              A Peaceful, United, and Integrated Africa and its Global Diaspora
            </p>

            <button className="bg-[#A90100] mt-5 text-[#fff] rounded-3xl p-3">
              Find out more
            </button>
          </div>
          <div className="w-[100%] ">
            <img src="/assets/home.png" alt="home" className="h-[70%]" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <h1 className="text-[#525560] text-center libre-baskerville-regular text-[22px] ">
            Our supporters
          </h1>
          <div className="grid grid-cols-5">
            <img src="/assets/sup1.png" alt="supporter1" />
            <img src="/assets/sup2.png" alt="supporter1" />
            <img src="/assets/sup3.png" alt="supporter1" />
            <img src="/assets/sup4.png" alt="supporter1" />
            <img src="/assets/sup5.png" alt="supporter1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesc;
