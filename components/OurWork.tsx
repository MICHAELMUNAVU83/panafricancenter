import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function OurWork() {
  return (
    <>
      <section className="w-full h-screen">
        <div className="w-full bg-red-100 p-8 md:px-[150px] lg:px-[150px] lg:py-16">
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
        <div className="flex flex-col lg:flex-row">
          <div className=" lg:w-1/2 lg:pl-[150px] lg:flex lg:items-center">
            <SectionHeader
              head={"Empowering"}
              title={"Pan African Youth Association: Empowering African Youth"}
              description={
                "Discover the initiatives that empower African youth and promote Pan African values."
              }
              list={[
                "Education and Awareness Workshops",
                "Cultural Promotion and Exchanges",
                "Cultural promotion and Exchange",npm 
              ]}
              Button={"signup"}
            />
          </div>
          <div className="p-8 md:px-[150px] lg:pr-[150px] items-center lg:w-1/2 ">
            <Image
              src={"/assets/empowering.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse  lg:flex-row">
          <div className="p-8 my-4 md:px-[150px] lg:pl-[150px] items-center lg:w-1/2">
            <Image
              src={"/assets/empowerment.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px] "
            />
          </div>
          <div className="lg:w-1/2 lg:pr-[150px] lg:flex lg:items-center">
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

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w:1/2 lg:pl-[150px] lg:flex lg:items-center">
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
          <div className="p-8 md:px-[150px] lg:pr-[150px]  items-center">
            <Image
              src={"/assets/goals.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[900px]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className=" md:px-[150px] p-8 lg:pr-[150px] items-center lg:w-1/2">
            <Image
              src={"/assets/sustainable.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>

          <div className="lg:w-1/2 lg:pr-[150px] lg:flex lg:items-center">
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

        <div className="flex flex-col lg:flex-row w-full">
          <div className="lg:pl-[150px] lg:w-1/2 lg:flex lg:items-center">
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
          <div className="p-8 md:px-[150px] lg:pr-[150px] lg:w-1/2 items-center">
            <Image
              src={"/assets/education.png"}
              width={300}
              height={100}
              alt="empowering image"
              className="md:w-[500px] lg:w-[700px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
