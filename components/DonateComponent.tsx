import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function DonateComponent() {
  return (
    <>
      <section className="w-full h-screen flex flex-col lg:flex-row items-center m-2 p-8">
        <div
          className=" relative w-full h-full bg-cover bg-center bg-no-repeat z-10 rounded-lg"
          style={{ backgroundImage: "url('/assets/donate.jpg')" }}
        >
          <div className="items-center justify-center flex  flex-col md:relative md:top-[300px]">
            <h1 className="font-inter text-3xl font-extrabold text-white">
              Donate Money
            </h1>
            <FaRegArrowAltCircleRight
              size={40}
              className="text-white cursor-pointer"
            />
          </div>

          <div className="inset-0 bg-black opacity-100 z-20 relative "></div>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-evenly my-8">
          <button className="w-40 cursor-pointer shadow-lg  h-20 ml-4">
            <img src="/assets/airtel-logo-red-text-horizontal.jpg" alt="" />
          </button>
          <button className="w-40 cursor-pointer shadow-lg h-20 ml-4">
            <img src="/assets/SafM-PESA-Logo.jpg" alt="" />
          </button>
          <button className="w-40 cursor-pointer shadow-lg h-20 flex justify-center items-center ml-4">
            <img
              src="/assets/visa-svgrepo-com.svg"
              className="w-24 h-24 items-center"
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
}
