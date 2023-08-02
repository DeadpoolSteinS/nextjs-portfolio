import Timeline from "./Timeline";

const History = () => {
  return (
    <section id="history" className="pt-32 pb-16">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <div
          className="flex justify-between gap-8
          [&_h2]:mb-4
          [&_h2]:text-[#353535]
          [&_h2]:text-4xl
          [&_h2]:font-bold
          [&_h2]:tracking-tight"
        >
          <div className="basis-1/2">
            <h2>Experiences</h2>

            <div className="timeline">
              <Timeline
                year="2022"
                title="Fullstack Developer - Present"
                desc="Fullstack Developer at Zapplerepair Indonesia. Managed employee assistance system and customer website interface."
              />
            </div>
          </div>

          <div className="basis-1/2">
            <h2>Educations</h2>

            <div className="timeline">
              <Timeline
                year="2023"
                title="Bangkit Academy 2023 -July 2023"
                desc="Bangkit 2023 Mobile Top 20 Capstone achiever | Embracing success with $10,000 reward alongside team."
              />
              <Timeline
                year="2020"
                title="Computer Science - Present"
                desc="Computer Science graduate from UPI with 3.70 GPA. Represented in programming competitions, became a national finalist."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
