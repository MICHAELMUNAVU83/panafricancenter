"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProgramData } from "../shared/Data";
import ProgramsTile from "../../components/programs/ProgramsTile";

export default function Programs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://cpaa.africa/form_handler.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          category: "",
          message: "",
        });
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

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
          <h1 className="text-[24px] md:text-[30px] lg:text-[48px]">
            Become a member today
          </h1>
        </motion.div>
        <motion.div
          className="w-full flex justify-center items-center min-h-auto lg:bg-gray-100"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full  lg:max-w-3xl md:max-w-2xl max-w-xl bg-white shadow-md rounded-lg p-8 space-y-6"
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
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
                id="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
                value={formData.category}
                onChange={handleChange}
                className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                required
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
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

            <p className="text-center mt-4 text-green-600">{status}</p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
