import Image from "next/image";

export default function TeamTile({ imgRef, name, Role }) {
  return (
    <div className="flex flex-col p-4 bg-gray-200">
      <div className="flex items-center justify-center">
        <Image src={imgRef} width={500} height={500} alt={name} />
      </div>
      <div className="flex flex-col">
        <h1>{name}</h1>
        <p>{Role}</p>
      </div>
    </div>
  );
}
