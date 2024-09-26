import React from "react";
// import PageHeader from "../components/PageHeader";
import { IoMdMail } from "react-icons/io";
import PageHeader from "@/components/PageHeader";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
const Contact = () => {
  return (
    <>
      {/* <PageHeader title="Contact Us" /> */}

      <section id="contact" className="">
        <div className="bg-red-100 w-full ">
          <div className="flex flex-col w-full max-w-[80%] mx-auto py-16 ">
            <div className="w-full my-4 p-2 ">
              <div className="flex flex-row  items-center w-full">
                <span className="items-center border-b-2 border-black w-5 md:w-10  mr-2"></span>
                <h4 className="font-inter uppercase text-sm font-extrabold md:text-lg">
                  contact us
                </h4>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start">
              <div className="w-full m-2 p-2 md:m-4 md:p-4">
                <div className="px-4 md:px-12 lg:px-8 lg:absolute lg:top-[200px] lg:left-[50px]">
                  <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-start  ">
                    We'd love to hear <br className="hidden md:block" />
                    {""} from you
                  </h1>
                  <p className="mt-4 text-sm leading-relaxed md:text-lg  ">
                    Have any question in mind or want to enquire? Please feel
                    free
                    <br className="hidden md:block" />
                    {""} to contact us through the form of the following details
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full m-2 p-2 md:mx-4 md:p-4 lg:relative lg:bottom-[55px]">
                <div className="px-8 md:px-16 lg:items-start lg:px-0">
                  <h3 className="font-extrabold text-lg mx-0 my-2 md:text-2xl lg:px-16">
                    Let's talk!
                  </h3>
                  <div className="flex flex-col start justify-evenly lg:flex-row ">
                    <span className="text-sm md:text-lg py-2 lg:pl-8 items-start">
                      +254-718-345-995
                    </span>
                    <span className="text-sm md:text-lg underline py-2  items-start">
                      info@panafricancenter.africa
                    </span>
                  </div>
                  <span className="border-b-[200px] my-4 border-white "></span>
                </div>
                <div className="w-full my-2 px-8 md:px-16">
                  <h3 className="font-extrabold text-lg mx-0 my-2 md:text-2xl">
                    HeadOffice
                  </h3>
                  <div className="px-0 mb-2">
                    <p className="text-sm md:text-lg py-2 ">
                      House No. J16, Jamhuri Crescent
                    </p>
                    <p className="text-sm md:text-lg pb-2">Ngong Road</p>
                  </div>
                </div>
                <div className="w-full my-2 md:px-8 items-start flex flex-col">
                  <h3 className="font-extrabold text-lg  my-2 md:text-2xl px-8 ">
                    Our Socials
                  </h3>
                  <div className="w-full mx-auto items-start lg:justify-normal  flex flex-row max-w-[80%]">
                    <RiFacebookCircleFill
                      size={20}
                      className="cursor-pointer text-gray-600"
                    />
                    <FaTwitter
                      size={20}
                      className="cursor-pointer ml-2 text-gray-600"
                    />
                    <FaLinkedin
                      size={20}
                      className="cursor-pointer ml-2 text-gray-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="md:w-[100%] w-[100%] h-[100%] lg:w-[100%] flex justify-center items-start bg-white mt-8 p-8 md:p-16  lg:items-center items ">
            <form
              action="https://formspree.io/f/xvgplpky"
              method="post"
              className="w-[100%] lg:w-[50%] flex flex-col gap-3 lg:gap-2 items-center justify-center"
            >
              <div className="flex  items-start md:flex-row flex-col gap-4 justify-between  w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%] lg:my-2">
                  <p className="text-black  text-[19px] font-inter font-semibold">
                    First Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your first name"
                    name="Name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 w-[100%] md:w-[48%] lg:my-2">
                  <p className="text-black  text-[19px] font-inter font-semibold">
                    Last Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your last name"
                    name="Name"
                    required
                  />
                </div>
              </div>
              <div className="flex  items-start justify-between md:flex-row flex-col gap-4   w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%] lg:my-2">
                  <p className="text-black  text-[19px] font-inter font-semibold">
                    Email
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your email"
                    name="Email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 w-[100%] md:w-[48%] lg:my-2">
                  <p className="text-black  text-[19px] font-inter font-semibold">
                    Phone Number
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your phone number"
                    name="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-1 w-[100%]">
                <p className="text-black text-[19px] font-inter font-semibold">
                  Subject
                </p>
                <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-2 lg:my-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="General Inquiry"
                      className="mr-2 ml-8"
                      required
                    />
                    General Inquiry
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="Donation Inquiry"
                      className="mr-2 ml-8"
                      required
                    />
                    Donation Inquiry
                  </label>

                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="subject"
                      value="Membership"
                      className="mr-2 ml-8"
                      required
                    />
                    Membership Inquiry
                  </label>
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-1 w-[100%]">
                <p className="text-black  text-[19px] font-inter font-semibold">
                  Message
                </p>
                <textarea
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] h-[150px] lg:h-[50px] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your message"
                  name="Message"
                  required
                />
              </div>

              <div className="w-[100%] justify-end flex mt-4">
                <button
                  type="submit"
                  className="text-center text-white font-inter font-light border px-5 py-3 rounded-[5px] bg-[#CD3738]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

{
  /* <div className="w-[100%]  justify-center items-center flex flex-col gap-2">
          <p className="md:text-[30px] text-[20px] libre-baskerville-bold text-[#1D2130]">
            We'd love to hear from you
          </p>
          <p className="text-[#717171] text-[15px] md:tfont-inter">
            Any question or remarks? Just write us a message!
          </p>
        </div>

        <div className="md:w-[80%] mt-5 w-[90%] md:flex-row flex-col  shadow-sm shadow-gray-500 rounded-md md:h-[670px] flex justify-center p-2 m-auto mb-10 ">
          <div className="md:w-[40%] w-[100%] h-[100%] bg-[#219D80] rounded-md  flex-col p-8 flex justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-white">Contact Information</p>
              <p className="text-white">Say something to start a live chat! </p>
            </div>

            <div className="flex flex-col gap-10 text-[#fff]">
              <div className="flex text-sm gap-1 items-center">
                <IoMdMail size={23} />
                <p className="">info@panafricancenter.africa</p>
              </div>
              <div className="flex gap-1 text-sm items-center">
                <FaLocationDot size={23} />
                <p className="">3146 Koontz Lane, Kilimani</p>
              </div>
              <div className="flex gap-1 items-center">
                <FaPhoneAlt size={23} />
                <p className="">(+254)74136300</p>
              </div>
            </div>

            <div className="w-[100%] flex justify-between items-center">
              <div className="flex gap-4 mt-6 items-center">
                <div className="md:w-[50px] md:h-[50px] h-[40px] w-[40px]  bg-[#CD3738] rounded-full flex justify-center items-center">
                  <FaTwitter className="text-white" size={30} />
                </div>
                <div className="md:w-[50px] md:h-[50px] h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center">
                  <BsInstagram className="text-[#219D80]" size={30} />
                </div>
                <div className="md:w-[50px] md:h-[50px] h-[40px] w-[40px] bg-[#CD3738] rounded-full flex justify-center items-center">
                  <FaLinkedin className="text-white" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-[100%] h-[100%] flex justify-center items-start bg-white p-8">
            <form
              action="https://formspree.io/f/xvgplpky"
              method="post"
              className="w-[100%] flex flex-col gap-3"
            >
              <div className="flex  items-start md:flex-row flex-col gap-4 justify-between  w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black  text-[19px] font-inter">
                    First Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your first name"
                    name="Name"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black  text-[19px] font-inter">
                    Last Name
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your last name"
                    name="Name"
                    required
                  />
                </div>
              </div>
              <div className="flex  items-start justify-between md:flex-row flex-col gap-4   w-[100%]">
                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black  text-[19px] font-inter">
                    Email
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your email"
                    name="Email"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1 w-[100%] md:w-[48%]">
                  <p className="text-black  text-[19px] font-inter">
                    Phone Number
                  </p>
                  <input
                    className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                    placeholder="Enter your phone number"
                    name="Phone Number"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col mt-4 gap-1 w-[100%]">
                <p className="text-black  text-[19px] font-inter">
                  Subject
                </p>
                <input
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your subject"
                  name="Subject"
                  required
                />
              </div>

              <div className="flex flex-col mt-4 gap-1 w-[100%]">
                <p className="text-black  text-[19px] font-inter">
                  Message
                </p>
                <textarea
                  className="w-[100%] p-2 border-b-[2px] border-[#8D8D8D] h-[150px] text-[#8D8D8D] bg-transparent focus:outline-none"
                  placeholder="Enter your message"
                  name="Message"
                  required
                />
              </div>

              <div className="w-[100%] justify-end flex">
                <button
                  type="submit"
                  className="text-center text-white font-inter border px-5 py-3 rounded-[5px] bg-[#CD3738]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="md:w-[80%] m-auto mt-5 w-[90%] ">
        <img
          src="/assets/bigmap.png"
          class="h-[500px] w-[100%] object-cover"
          alt="Group-1_1"
        />
      </div>
    </div> */
}
