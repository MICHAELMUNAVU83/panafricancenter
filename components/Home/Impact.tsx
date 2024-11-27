"use client";
import { motion } from "framer-motion";
import { ImpactData } from "@/app/shared/Data";
import ImpactTile from "./ImpactTile";

export default function ImpactComponent() {
  return (
    <section className="w-full h-auto lg:h-screen bg-orange-200">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto w-full">
        <div>
          {ImpactData.map((data, index) => (
            <motion.div
              key={data.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <ImpactTile
                title={data.title}
                desc={data.desc}
                list2={data.list2}
                list={data.list}
                btn={data.btn}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
