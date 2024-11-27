"use client";
import { motion } from "framer-motion";
import TileComponent from "./Tile";
import { IntroData } from "@/app/shared/Data";

export default function StandForSection() {
  return (
    <section className="w-full h-auto lg:h-auto flex item-center my-20">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center items-center flex-wrap gap-8">
        {IntroData.map((data, index) => (
          <motion.div
            key={data.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <TileComponent
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
