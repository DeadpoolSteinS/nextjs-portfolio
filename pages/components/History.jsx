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
          [&_h2]:tracking-tight
          [&_.tl-wrapper]:relative
          [&_.tl-wrapper]:py-5
          [&_.tl-wrapper]:before:content-['']
          [&_.tl-wrapper]:before:bg-[#474559]
          [&_.tl-wrapper]:before:w-[2px]
          [&_.tl-wrapper]:before:h-full
          [&_.tl-wrapper]:before:absolute
          [&_.tl-wrapper]:before:left-9
          last:[&_.tl-wrapper]:before:h-0
          [&_.tl-year]:absolute 
          [&_.tl-year]:w-[75px] 
          [&_.tl-year]:h-[75px] 
          [&_.tl-year]:bg-[#474559] 
          [&_.tl-year]:rounded-full 
          [&_.tl-year]:leading-[75px] 
          [&_.tl-year]:text-center 
          [&_.tl-year>p]:text-white 
          [&_.tl-year>p]:font-bold"
        >
          <div>
            <h2>Experiences</h2>

            <div className="timeline">
              <div className="tl-wrapper">
                <div className="tl-year">
                  <p>2022</p>
                </div>
                <div className="ml-24">
                  <p className="font-bold">IT Programmer</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, dolorum!
                  </p>
                </div>
              </div>

              <div className="tl-wrapper">
                <div className="tl-year">
                  <p>2020</p>
                </div>
                <div className="ml-24">
                  <p className="font-bold">Junior Web Developer</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, dicta!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Educations</h2>

            <div className="timeline">
              <div className="tl-wrapper">
                <div className="tl-year">
                  <p>2020</p>
                </div>
                <div className="ml-24">
                  <p className="font-bold">Computer Science</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    officiis.
                  </p>
                </div>
              </div>

              <div className="tl-wrapper">
                <div className="tl-year">
                  <p>2017</p>
                </div>
                <div className="ml-24">
                  <p className="font-bold">Senior High School</p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsam, repellat?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
