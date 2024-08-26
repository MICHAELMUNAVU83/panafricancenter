import React from "react";

const Posts = () => {
  const posts = [
    {
      month: "Apr",
      day: "14",
      title:
        "Boosting Together for Tomorrow: Building a Better Futureharity Campaign",
      image: "/assets/event1.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      month: "Apr",
      day: "14",
      title: "Catalysts for Change: A Summit on Social Innovation",
      image: "/assets/event2.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
    {
      month: "Apr",
      day: "14",
      title: "Pathways to Progress: An Event for Social Impact Leaders",
      image: "/assets/event3.png",
      description:
        "We’ll get you directly seated and inside for you to enjoy the show.",
    },
  ];
  return (
    <div id="news" className="md:w-[80%] w-[90%] m-auto mb-10 ">
      <div className="text-center gap-5 flex items-center justify-center">
        <div className="h-[2px] bg-[#060] w-12" />
        <h3 className="uppercase roboto-bold  text-[#A90100] text-[18px] ">
          Be on the Know
        </h3>
      </div>

      <h2 className="text-center text-[#525560] libre-baskerville-regular  text-5xl mt-3">
        Related Posts
      </h2>

      <div className="mt-16 grid md:grid-cols-3 grid-cols-1  gap-6 md:gap-10">
        {posts.map((post) => (
          <div className="rounded-md shadow-lg">
            <div>
              <img src={post.image} alt="post1" />
            </div>
            <div className=" flex gap-10 p-5">
              <div className="flex roboto-bold flex-col">
                <p className="text-[#A90100] font-bold text-sm uppercase">
                  {post.month}
                </p>
                <p className="text-[#000] font-bold text-3xl mt-2">
                  {post.day}
                </p>
              </div>
              <div>
                <h3 className=" libre-baskerville-bold text-sm tracking-wide text-[#000]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm roboto-regular text-[#6A6A6A]">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center ">
        <button className="text-center text-[#A90100] border p-3 mt-10  w-40 rounded-full border-[#A90100]">
          View All
        </button>
      </div>
    </div>
  );
};

export default Posts;
