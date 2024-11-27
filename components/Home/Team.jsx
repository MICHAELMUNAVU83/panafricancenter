"use client";

import { motion } from "framer-motion";
import { teamData } from "@/app/shared/Data";
import TeamTile from "./TeamTile.jsx";

export default function OurTeam() {
  return (
    <section className="w-full h-auto py-8">
      <div className="w-full max-w-[90%] mx-auto lg:max-w-[80%]">
        <div className="text-start mb-8">
          {teamData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold">
                {data.title[0]}
              </h1>
              <div className="text-[16px] md:text-[20px] lg:text-[24px] mt-4">
                {data.desc.map((desc, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.2,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    {desc}
                  </motion.p>
                ))}
              </div>
              <h2 className="text-[20px] md:text-[30px] lg:text-[48px] font-semibold mt-8">
                {data.title[1]}
              </h2>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          {teamData[0].persona.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <TeamTile
                name={member.name}
                Role={member.role}
                imgRef={member.image}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
