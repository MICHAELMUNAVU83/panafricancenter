import Image from "next/image";
import { FaMapPin } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { BiCalendarAlt } from "react-icons/bi";
import { BiMapPin } from "react-icons/bi";
import { BsPinMap } from "react-icons/bs";
import { BiMapAlt } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function EventComponent() {
  return (
    <>
      <section className="flex flex-col justify-center align-center ">
        <div className="bg-red-100 px-16 md:px-48 lg:px-80">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-start mt-12  ">
            Youth Empowerment <br className="hidden lg:block" /> Summit
          </h1>
          <div className="flex flex-col mx-2 mt-2 mb-12 lg:flex-row ">
            <p className="font-medium text-sm md:text-md lg:text-md justify-start items-center flex flex-row my-2 ">
              <BsPinMap className="mr-2" /> Opp Opolo round about, Yenagoa,
              Nairobi Kenya
            </p>
            <p className="flex flex-row items-center justify-start text-sm my2 md:text-md lg:text-md lg:ml-4">
              <BiCalendarAlt className="mr-2" /> November 10,2024 8:30 AM
            </p>
          </div>
        </div>
        <div>
          <div className="w-full flex flex-col items-start justify-center px-16 md:px-48 lg:px-80 my-4">
            <h2 className="text-xl text-start font-bold my-4 lg:text-4xl">
              About
            </h2>
            <p className="text-sm my-4 md:text-lg md:text-balance lg:text-pretty lg:pr-12  lg:text-xl">
              The Youth Empowerment Summit is a dynamic event designed to
              inspire and equip young Africans with the tools and knowledge to
              become impactful leaders in their communities. This summit brings
              together passionate youth, mentors, and thought leaders for a day
              of interactive workshops, networking opportunities, and
              motivational talks. Participants will engage in discussions on
              topics such as entrepreneurship, leadership development, social
              activism, and the role of youth in driving Africa’s future.{" "}
            </p>
            <Image
              src="/assets/event.png"
              alt="eventimg"
              width={400}
              height={80}
              className="w-full lg:w-[550px] h-auto"
            />

            <p className="text-sm my-4 md:text-lg lg:pr-12 lg:text-xl text-pretty">
              The summit aims to empower attendees to take action, collaborate
              on innovative solutions, and build a network of like-minded
              individuals committed to making a difference.
            </p>
          </div>
          <div className="my-4 flex flex-col justify-center px-16 md:px-56 lg:px-80 ">
            <h2 className="text-xl font-bold">Other Events</h2>
            <div>
              <div className="flex flex-row items-center justify-evenly bg-red-600 rounded-xl my-4 text-white p-4 lg:w-[628px] lg:h-[191px] ">
                <div className="flex flex-col mr-4">
                  <p className="font-bold text-xl lg:text-4xl">25</p>
                  <p text-sm>sep</p>
                </div>
                <div className="libre-baskeville-light ">
                  <h3 className="lg:text-2xl">
                    Next Event{" "}
                    <span className="border-b-8 border-white items-center justify-center"></span>
                  </h3>
                  <p className="lg:text-2xl">
                    Seminar: Caring for <br className="hidden  lg:block" />{" "}
                    children with Autism
                  </p>
                </div>

                <button>
                  {" "}
                  <FaArrowAltCircleRight className="lg:w-16 lg:h-16" />{" "}
                </button>
              </div>
              <div className="flex flex-row items-center justify-evenly bg-red-600 rounded-xl my-4 text-white p-4 lg:w-[628px] lg:h-[191px] ">
                <div className="flex flex-col mr-4">
                  <p className="font-bold text-xl lg:text-4xl">25</p>
                  <p text-sm>sep</p>
                </div>
                <div className="libre-baskeville-light ">
                  <h3 className="lg:text-2xl">
                    Next Event{" "}
                    <span className="border-b-8 border-white items-center justify-center"></span>
                  </h3>
                  <p className="lg:text-2xl">
                    Seminar: Caring for <br className="hidden  lg:block" />{" "}
                    children with Autism
                  </p>
                </div>

                <button className="">
                  {" "}
                  <FaArrowAltCircleRight className="lg:w-16 lg:h-16" />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
