import { ImpactData } from "@/app/shared/Data";
import ImpactTile from "./ImpactTile";

export default function ImpactComponent() {
  return (
    <section className="w-full h-auto lg:h-screen bg-gray-100">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto w-full">
        <div>
          {ImpactData.map((data) => (
            <ImpactTile
              key={data.title}
              title={data.title}
              desc={data.desc}
              list2={data.list2}
              list={data.list}
              btn={data.btn}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
