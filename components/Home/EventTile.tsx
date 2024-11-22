import Image from "next/image";

export default function EventTile({
  headerTag,
  title,
  subTitle,
  desc,
  date,
  venue,
  btn,
  imgRef,
}) {
  return (
    <div className="bg-gray-200 rounded-3xl p-4">
      <div className="relative w-full ">
        <span className="absolute z-10 text-white">{headerTag}</span>
        <div className="relative flex -tems-center justify-center">
          <Image
            src={imgRef}
            width={500}
            height={500}
            alt={title}
            className="w-full lg:h-auto lg:bg-fixed lg:bg-cover lg:bg-center"
          />
        </div>
      </div>
      <div>
        <div className="">
          <h1 className="text-[16px] md:text-[20px] lg:text-[24px]">{title}</h1>
          <h2 className="text-[20px] md:text-[24px] lg:text-[32px]">
            {subTitle}
          </h2>
        </div>
        <div className="px-4 py-2">
          <p className="text-[16px] md:text-[20px] lg:text-[24px]">{desc}</p>
        </div>
        <div className="flex flex-col bg-red-600  p-4 rounded-3xl space-y-4">
          <span className="text-lg text-bold text-white">Date{date}</span>
          <span className="text-lg text-bold text-white">Venue:{venue}</span>
          <button className="px-4 py-2 lg:px-8 lg:py-4 bg-white text-red-600 rounded-xl">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}
