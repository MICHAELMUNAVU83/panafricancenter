import { teamData } from "@/app/shared/Data";
import TeamTile from "./TeamTile";

export default function OurTeam() {
  return (
    <section className="w-full h-auto py-8">
      <div className="w-full max-w-[90%] mx-auto lg:max-w-[80%]">
        <div className="text-start mb-8">
          {teamData.map((data, index) => (
            <div key={index}>
              <h1 className="text-[20px] md:text-[30px] lg:text-[48px] font-bold">
                {data.title[0]}
              </h1>
              <div className="text-[16px] md:text-[20px] lg:text-[24px] mt-4">
                {data.desc.map((desc, idx) => (
                  <p key={idx} className="mb-4">
                    {desc}
                  </p>
                ))}
              </div>
              <h2 className="text-[20px] md:text-[30px] lg:text-[48px] font-semibold mt-8">
                {data.title[1]}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md: md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {teamData[0].persona.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamTile
                key={member.id}
                name={member.name}
                Role={member.role}
                imgRef={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
