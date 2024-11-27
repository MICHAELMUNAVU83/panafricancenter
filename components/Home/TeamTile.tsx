import Image from "next/image";

export default function TeamTile({ imgRef, name, Role }) {
  return (
    <div className="flex flex-col p-4 bg-orange-200">
      <div className="flex items-center justify-center bg-gray-300 rounded-3xl">
        <Image
          src={imgRef}
          width={500}
          height={500}
          alt={name}
          className="rounded-3xl  bg-center bg-cover h-80"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-[20px] md:text-[24px] lg:text-[30px]">{name}</h1>
        <p className="text-[16px] md:text-[20px] lg:text-[24px]">{Role}</p>
      </div>
    </div>
  );
}
