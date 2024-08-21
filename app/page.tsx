import About from "@/components/About";
import HomeDesc from "@/components/Home";
import GetInvolved from "@/components/GetInvolved";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import NavbarTop from "@/components/NavbarTop";
import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeDesc />
      <About />
      <Vision />
      <GetInvolved />
      <Statistics />
      <Posts />
      <UpcomingEvents />
      <Contact />

      <Footer />
    </main>
  );
}
