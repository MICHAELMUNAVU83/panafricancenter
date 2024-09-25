import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function OurWork() {
  return (
    <>
      <section className="w-full h-auto">
        <div className="bg-red-100 w-full ">
          <div className="w-full mx-auto max-w-[80%] p-8 lg:py-16">
            <div className="flex flex-row items-start">
              <span className="border-b border-black inline-block w-4 h-2 ml-4"></span>{" "}
              <p className="text-sm items-start font-bold ">WHAT WE DO</p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold lg:text-4xl">
                Discover Our Organ
              </h1>
              <p className="font-sm">
                Learn about the different organs that make up the Pan African
                Youth Association
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row w-full mx-auto max-w-[80%]">
          <div className=" lg:flex md:w-full lg:w-1/2 p-4 lg:items-center items-center">
            <SectionHeader
              head={"Empowering"}
              title={"Pan African Youth Association: Empowering African Youth"}
              description={
                "Discover the initiatives that empower African youth and promote Pan African values."
              }
              list={[
                "Education and Awareness Workshops",
                "Cultural Promotion and Exchanges",
                "Cultural promotion and Exchange",
              ]}
              Button={"signup"}
            />
          </div>
          <div className="p-4 md:w-full lg:w-1/2 items-center w-full mx-auto max-w-[80%] ">
            <Image
              src={"/assets/empowering.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-evenly w-full max-w-[80%] mx-auto">
          <div className=" p-4 items-center lg:w-1/2 w-full mx-auto max-w-[80%]">
            <Image
              src={"/assets/empowerment.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px] "
            />
          </div>
          <div className="lg:flex p-4 items-center flex lg:items-center lg:w-1/2">
            <SectionHeader
              head={"Empowerment"}
              title={"Pan African Youth Association: Empowering African Youth"}
              description={
                "The Pan African Women Network is dedicated to empowering women and promoting gender equality in Africa. Through various initiatives and programs, we strive to create a supportive and inclusive environment for women to thrive."
              }
              subtitles={["our mission", "our vision"]}
              subDescriptions={[
                "Empowering women through education, advocacy, and community engagement for a brighter future.",
                "Conducting workshops, seminars, and conferences to promote womens rights and leadership.",
              ]}
              Button={"signup"}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-[80%] mx-auto">
          <div className="lg:flex p-4  items-center flex lg:items-center lg:w-1/2">
            <SectionHeader
              // head={"Empowering"}
              title={
                "Pan African Chamber of Trade and Commerce: Goals and Projects"
              }
              description={
                "Discover the goals and projects of the Pan African Chamber of Trade and Commerce, dedicated to promoting economic growth and collaboration across Africa."
              }
              subtitles={["Goals", "Projects"]}
              subDescriptions={[
                "1. Foster economic development and trade partnerships among African nations and businesses.",
                "1. Implement initiatives to enhance cross-border trade and investment opportunities in Africa.",
              ]}
              Button={null}
            />
          </div>
          <div className="p-8  items-center lg:w-1/2 w-full mx-auto max-w-[80%]">
            <Image
              src={"/assets/goals.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[900px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row w-full max-w-[80%] mx-auto">
          <div className=" flex p-4 items-center lg:w-1/2 w-full mx-auto max-w-[80%]">
            <Image
              src={"/assets/sustainable.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>

          <div className="lg:w-1/2 items-center-flex p-4 lg:flex lg:items-center">
            <SectionHeader
              head={"Sustainable"}
              title={"Driving Climate Action for a Sustainable Future"}
              description={
                "Pan African Climate Action and Environmental Sustainability is committed to addressing environmental challenges and promoting sustainable development in Africa. Through our initiatives, we aim to create a greener, cleaner, and more resilient future for all."
              }
              Button={"Signup"}
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full max-w-[80%] mx-auto">
          <div className=" p-4 lg:w-1/2 lg:flex lg:items-center">
            <SectionHeader
              title={
                "Empowering African Communities Through Pan African Center of Excellence"
              }
              description={
                "Discover our programs and objectives aimed at promoting Pan Africanism, education, cultural exchange, advocacy, and strategic interventions."
              }
              subtitles={["Education", "Cultural Promotion"]}
              subDescriptions={[
                "Conducting workshops, seminars, conferences, and community forums to educate communities on Pan Africanism.",
                "Celebrating and promoting Africa's rich heritage and diversity through cultural activities and exchanges.",
              ]}
            />
          </div>
          <div className="p-4 flex lg:w-1/2 items-center w-full mx-auto max-w-[80%]">
            <Image
              src={"/assets/education.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>
        </div>
        <div
          className="w-full max-w-[80%] mx-auto flex flex-col bg-cover bg-center rounded-2xl h-[300px] my-20 "
          style={{ backgroundImage: "url(/assets/parallax.png)" }}
        >
          {/* <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold ">
              Join the Pan African Movement
            </h1>
            <p>
              Be part of a United Africa Promoting peace, development and
              cultural exchange
            </p>
          </div>
          <div>
            <button>Donate</button>
            <button>Becom a member</button>
          </div> */}
        </div>
      </section>
    </>
  );
}
