import About from "@/components/About";
import HomeDesc from "@/components/Home";
import GetInvolved from "@/components/GetInvolved";
import Statistics from "@/components/Statistics";
import Image from "next/image";
import NavbarTop from "@/components/NavbarTop";
import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavbarTop />
      <Navbar />
      <HomeDesc />
      <About />

      <GetInvolved />

      <Statistics />
      <Vision />
      <Events />
      <Gallery />
      <Footer />
    </main>
  );
}
