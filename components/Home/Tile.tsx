"use client";
import Image from "next/image";

export default function TileComponent({
  headerTile,
  title,
  desc = ["", ""],
  list = [],
  imgRef,
  btn,
}) {
  return (
    <>
      <div className="flex space-x-4">
        <div className="flex flex-col w-full space-y-4">
          <div className="flex flex-row space-x-4 w-auto items-center">
            <span className="border-b-4 border-red-600 w-8 h-2 flex "></span>
            <span className="text-red-600 text-[20px] font-bold">
              {headerTile}
            </span>
          </div>
          <div>
            <h1 className="text-[48px]">{title}</h1>
            <p className="text-[24px]">{desc[0]}</p>
            <ul className="pl-8">
              {list.map((list, idx) => (
                <li key={idx} className="text-[24px] font-semibold list-disc">
                  {list}
                </li>
              ))}
            </ul>
            <p className="text-[24px]">{desc[1]}</p>
            <button className="px-8 py-4 mt-10 bg-red-600 text-yellow-500 text-lg">
              {btn}
            </button>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={imgRef}
            width={500}
            height={500}
            className="bg-cover bg-center lg:w-full lg:h-full"
            alt={title}
          />
        </div>
      </div>
    </>
  );
}

export const TileComponent2 = ({
  headerTile,
  title,
  desc = ["", ""],
  list = [],
  imgRef,
  btn,
}) => {
  return (
    <>
      <div className="flex space-x-4">
        <div className="w-full">
          <Image
            src={imgRef}
            width={500}
            height={500}
            className="bg-cover bg-center lg:w-full lg:h-full"
            alt={title}
          />
        </div>
        <div className="flex flex-col w-full space-y-4">
          <div className="flex flex-row space-x-4 w-auto items-center">
            <span className="border-b-4 border-red-600 w-8 h-2 flex "></span>
            <span className="text-red-600 text-[20px] font-bold">
              {headerTile}
            </span>
          </div>
          <div>
            <h1 className="text-[48px]">{title}</h1>
            <p className="text-[24px] t">{desc[0]}</p>
            <p className="text-[24px]">{desc[1]}</p>
            <ul className="pl-8">
              {list.map((list, idx) => (
                <li key={idx} className="text-[24px] font-medium list-disc">
                  {list}
                </li>
              ))}
            </ul>
          </div>
          <button className="px-8 py-4 bg-red-600 text-yellow-500 text-lg">
            {btn}
          </button>
        </div>
      </div>
    </>
  );
};
