import { JoinData } from "@/app/shared/Data";
import JoinTile from "./JoinTile";

export default function JoinSection() {
  return (
    <section className=" my-10 w-full h-auto lg:h-screen flex items-center justify-center">
      <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto">
        {JoinData.map((data) => (
          <div className="w-full items-center flex justify-center">
            <JoinTile
              headerTag={data.headerTag}
              key={data.id}
              title={data.title}
              desc={data.desc}
              btn={data.button}
              imgRef={data.imgRef}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
