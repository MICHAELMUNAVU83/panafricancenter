import HeroTile from "@/components/About/HeroTile";
import { AboutData } from "../shared/Data";
export default function About() {
  return (
    <>
      <section className="w-full h-auto">
        <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
          <HeroTile about={AboutData.about} tiles={AboutData.tiles} />{" "}
        </div>
      </section>
    </>
  );
}
