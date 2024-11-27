import Image from "next/image";
import Link from "next/link";

export default function JoinTile({ headerTag, title, desc, btn, imgRef }) {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-8">
      <div className="w-full flex flex-col justify-center">
        <div className="flex flex-row items-center w-auto space-x-4">
          <span className="border-b-4 border-red-600 w-8 h-2 flex "></span>
          <span className="text-red-600 text-[14px] md:text-[16px] lg:text-[18px] font-bold">
            {headerTag}
          </span>
        </div>
        <div className="flex flex-col space-y-8">
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px]">{title}</h1>
          <p className="text-[14px] md:text-[18px] lg:text-[22px]">{desc}</p>
          <Link href={'/programs'}>
          <button className="px-8 py-4 border-2 border-red-600">{btn}</button>

          </Link>
        </div>
      </div>
      <div className="w-full mt-10 ">
        <Image
          src={imgRef}
          alt={title}
          width={"500"}
          height={"500"}
          className="lg:w-full md:w-full  bg-fixed"
        />
      </div>
    </div>
  );
}
