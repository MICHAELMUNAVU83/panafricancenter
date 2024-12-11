"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProgramData } from "../shared/Data";
import ProgramsTile from "../../components/programs/ProgramsTile";

export default function Programs() {
  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {ProgramData.map((program) => (
            <ProgramsTile
              key={program.id}
              imgRef={program.imgRef}
              title={program.title}
              desc={program.desc}
            />
          ))}
        </motion.div>

        <motion.div
          className="w-full h-auto mt-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-[24px] md:text-[30px] lg:text-[36px] text-center">
            Become a member today
          </h1>
        </motion.div>

        <motion.div
          className="w-full flex justify-center items-center lg:bg-orange-100 p-8"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <form
            action="https://formspree.io/f/xvgplpky"
            method="post"
            className="w-full lg:max-w-3xl md:max-w-2xl max-w-xl bg-white shadow-md rounded-lg p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Contact Us
            </h2>

            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                name="Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-gray-700 font-medium"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Your Location"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                name="Location"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-gray-700 font-medium"
              >
                Category
              </label>
              <select
                id="category"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
                name="Category"
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="feedback">Feedback</option>
                <option value="inquiry">Inquiry</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                name="Message"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
