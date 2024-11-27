"use client";
import { motion } from "framer-motion";
import { JoinData } from "@/app/shared/Data";
import JoinTile from "./JoinTile";

export default function JoinSection() {
  return (
    <section className="my-10  lg:my-20 w-full h-auto lg:h-screen flex items-center justify-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto">
        {JoinData.map((data, index) => (
          <motion.div
            key={data.id}
            className="w-full items-center flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            <JoinTile
              headerTag={data.headerTag}
              title={data.title}
              desc={data.desc}
              btn={data.button}
              imgRef={data.imgRef}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
