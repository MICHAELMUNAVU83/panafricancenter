import { ProgramData } from "../shared/Data";
import ProgramsTile from "../../components/programs/ProgramsTile";

export default function Programs() {
  return (
    <section className="w-full h-auto">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto">
        <div>
          {ProgramData.map((program) => (
            <ProgramsTile
              key={program.id}
              imgRef={program.imgRef}
              title={program.title}
              desc={program.desc}
            />
          ))}
        </div>
        <div className="w-full h-auto">
          <div>
            <h1 className="text-[24px] md:text-[30px] lg:text-[48px]">
              Become a member today
            </h1>
          </div>
          <div>
            <div className="flex justify-center items-center min-h-screen lg:bg-gray-100">
              <form
                className="w-full max-w-lg lg:max-w-3xl md:max-w-2xl sm:max-w-xl bg-white shadow-md rounded-lg p-8 space-y-6"
                style={{
                  maxWidth: "60% lg:max-w-[70%] md:max-w-[80%]",
                }}
              >
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Contact Us
                </h2>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
                    placeholder="Your Email"
                    className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
                  >
                    <option value="" disabled selected>
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
                    rows="5"
                    placeholder="Write your message here..."
                    className="mt-2 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
