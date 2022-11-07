import Image from "next/image";

const About = () => {
  return (
    <section className="py-32" id="about">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <div className="lg:flex lg:justify-between lg:items-center lg:gap-6">
          <div className="relative w-[400px] h-[300px] shrink-0 mx-auto lg:order-last">
            <Image
              src="/profile.jpg"
              fill="true"
              sizes="360"
              className="object-cover rounded"
              alt="SteinS Profile"
              priority="false"
            />
          </div>

          <div className="about-text">
            <small className="text-[#5b5b5b] font-bold tracking-tight text-sm">
              Welcome to my portfolio website!
            </small>

            <h1 className="relative text-[#212121] text-[2.8em] my-6 font-bold tracking-tight">
              <span>Hey there, I&apos;m </span>
              <div className="inline-block relative min-w-[240px] align-top mt-[6px] [&>span]:text-[#ffc200] [&>span]:text-[38px] [&>span]:absolute [&>span]:animate-bottom-to-top [&>span]:opacity-0">
                <span>Novaldi Ago</span>
                <span style={{ animationDelay: "2s" }}>Mobile Dev</span>
                <span style={{ animationDelay: "4s" }}>Backend Dev</span>
              </div>
            </h1>

            <p>
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </p>

            <div className="mt-2 [&>a]:inline-block [&>a]:font-bold [&>a]:rounded-full [&>a]:px-7 [&>a]:py-3 [&>a]:text-sm [&>a]:transition-colors">
              <a
                href="#"
                className="bg-gray-200 text-gray-600 hover:text-[#ffc200] mr-2"
              >
                <i className="uil uil-file-alt"></i> Download Resume
              </a>

              <a
                href="#contact"
                className="bg-gray-600 text-white hover:bg-[#ffc200]"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
