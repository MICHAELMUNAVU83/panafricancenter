'use client'


import { motion } from "framer-motion"; 
import { VisionData } from "@/app/shared/Data";
import { TileComponent2 } from "./Tile";

export default function WhatWeDo() {
  return (
    <section className="w-full my-10 h-auto lg:h-screen flex item-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center items-center flex-wrap gap-8">
        {VisionData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }} 
            viewport={{ once: true }} 
          >
            <TileComponent2
              headerTile={data.headerTag}
              title={data.title}
              desc={data.desc}
              list={data.list}
              imgRef={data.imgRef}
              btn={data.button}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
