import { VisionData } from "@/app/shared/Data";
import { TileComponent2 } from "./Tile";
import Image from "next/image";

export default function WhatWeDo() {
  return (
    <section className="w-full my-10 h-auto lg:h-screen flex item-center ">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex justify-center items-center">
        {/* <div className="absolute -right-44">
          <Image
            src={`/assets/hero/leaf.png`}
            width={400}
            height={400}
            alt="WEddo"
          />
        </div> */}
        {/* <div className="absolute -left-44 -rotate-180">
          <Image
            src={`/assets/hero/leaf.png`}
            width={400}
            height={400}
            alt="WEddo"
          />
        </div> */}

        {VisionData.map((data) => (
          <TileComponent2
            key={data.id}
            headerTile={data.headerTag}
            title={data.title}
            desc={data.desc}
            list={data.list}
            imgRef={data.imgRef}
            btn={data.button}
          />
        ))}
      </div>
    </section>
  );
}
