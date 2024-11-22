import TileComponent from "./Tile";
import { IntroData } from "@/app/shared/Data";

export default function StandForSection() {
  return (
    <section className="w-full h-auto lg:h-screen flex item-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex  justify-center items-center">
        {IntroData.map((data) => (
          <TileComponent
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
