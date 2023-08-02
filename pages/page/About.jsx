import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="pt-56 pb-24" id="about">
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
            <p className="text-[#5b5b5b] font-bold tracking-tight text-xl">
              Welcome to my portfolio website!
            </p>

            <h1 className="relative text-[#212121] text-[2.8em] mt-6 mb-4 font-bold tracking-tight">
              <span>Hey there, I&apos;m </span>
              <div
                className="inline-block relative min-w-[280px] align-top mt-[6px] [&>span]:text-[#ffc200] [&>span]:text-[38px] [&>span]:absolute [&>span]:animate-bottom-to-top [&>span]:opacity-0">
                <span>Novaldi Ago</span>
                <span style={{animationDelay: "2s"}}>Tech Enthusiast</span>
                <span style={{animationDelay: "4s"}}>Fullstack Dev</span>
              </div>
            </h1>

            <div className="mb-4">
              Passionate about creating efficient code, competitive programming, and currently exploring AI and the metaverse.
            </div>

            <div
              className="mt-2 [&>a]:inline-block [&>a]:font-bold [&>a]:rounded-xl [&>a]:px-7 [&>a]:py-3 [&>a]:text-sm [&>a]:transition-colors">
              <Link
                href="https://drive.google.com/file/d/1OxrLa8GsSf3spsago3H07r0-pvWN3LsI/view?usp=sharing"
                target="_blank"
                className="bg-gray-200 text-gray-600 hover:text-[#ffc200] mr-2"
              >
                <i className="uil uil-file-alt"></i> Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
