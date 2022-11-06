import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto xl:max-w-[1280px] px-8">
        <h1 className="text-center text-[#353535] tracking-tight font-bold text-4xl mb-8">
          My Portfolio
        </h1>
        <ul className="flex justify-center gap-2 mb-4 [&>li]:cursor-pointer [&>li]:inline-block [&>li]:font-bold [&>li]:rounded-full [&>li]:px-7 [&>li]:py-3 [&>li]:text-sm [&>li]:transition-colors">
          <li className="bg-gray-600 text-white">All</li>
          <li className="bg-gray-200 text-gray-600 hover:text-[#ffc200]">
            Design
          </li>
          <li className="bg-gray-200 text-gray-600 hover:text-[#ffc200]">
            Development
          </li>
          <li className="bg-gray-200 text-gray-600 hover:text-[#ffc200]">
            Marketing
          </li>
        </ul>
        <div className="grid grid-cols-3 gap-6">
          <a href="#" class="relative">
            <Image
              className="rounded"
              src="/img/portfolio-1.jpg"
              alt=""
              width="400"
              height="300"
            />
            <div class="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
              <div>
                <p className="font-bold">Fashion App</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative">
            <Image
              className="rounded"
              src="/img/portfolio-2.jpg"
              alt=""
              width="400"
              height="300"
            />
            <div class="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
              <div>
                <p className="font-bold">Fashion App</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative">
            <Image
              className="rounded"
              src="/img/portfolio-3.jpg"
              alt=""
              width="400"
              height="300"
            />
            <div class="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
              <div>
                <p className="font-bold">Fashion App</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </a>
          <a href="#" class="relative">
            <Image
              className="rounded"
              src="/img/portfolio-4.jpg"
              alt=""
              width="400"
              height="300"
            />
            <div class="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
              <div>
                <p className="font-bold">Fashion App</p>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
