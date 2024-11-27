'use client'

import { motion } from "framer-motion"; 
import HeroTile from "@/components/About/HeroTile";
import { AboutData } from "../shared/Data";
import OurWork from "@/components/About/OurWork";

export default function About() {
  return (
    <>
      <section className="w-full h-auto">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            viewport={{ once: true }} 
          >
            <HeroTile about={AboutData.about} tiles={AboutData.tiles} />
          </motion.div>
        </div>

        <div className= "my-10 lg:my-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            viewport={{ once: true }} 
          >
            <OurWork />
          </motion.div>
        </div>
      </section>
    </>
  );
}
