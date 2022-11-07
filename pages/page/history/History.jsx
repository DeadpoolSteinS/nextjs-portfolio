import Timeline from "./Timeline";

const History = () => {
  return (
    <section id="resume">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <div
          className="flex justify-between gap-8 
          [&_h2]:mb-4 
          [&_h2]:text-[#353535] 
          [&_h2]:text-4xl 
          [&_h2]:font-bold 
          [&_h2]:tracking-tight"
        >
          <div>
            <h2>Experiences</h2>

            <div className="timeline">
              <Timeline
                year="2022"
                title="IT Programmer"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, vero?"
              />
              <Timeline
                year="2020"
                title="Junior Web Developer"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, dicta!"
              />
            </div>
          </div>

          <div>
            <h2>Educations</h2>

            <div className="timeline">
              <Timeline
                year="2020"
                title="Computer Science"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                officiis."
              />
              <Timeline
                year="2017"
                title="Senior High School"
                desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ipsam, repellat?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
