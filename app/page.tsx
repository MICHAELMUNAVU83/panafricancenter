import About from "@/components/About";
import HomeDesc from "@/components/Home";
import GetInvolved from "@/components/GetInvolved";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import NavbarTop from "@/components/NavbarTop";
import Supporters from "@/components/Supporters";
import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";
import StandForSection from "@/components/Home/StandForSection";
import WhatWeDo from "@/components/Home/WhatWeDo";
import JoinSection from "@/components/Home/Join";
import EventComponent from "@/components/EventComponent";
import OurTeam from "@/components/Home/Team";
import ImpactComponent from "@/components/Home/Impact";

export default function Home() {
  return (
    <main>
      <HomeDesc />
      <StandForSection />
      <WhatWeDo />
      <JoinSection />
      <EventComponent />
      <ImpactComponent />
      <OurTeam />

      {/* <About /> */}
      {/* <Vision /> */}
      {/* <GetInvolved /> */}
      {/* <Statistics /> */}
      {/* <Posts /> */}
      {/* <Supporters /> */}
    </main>
  );
}
