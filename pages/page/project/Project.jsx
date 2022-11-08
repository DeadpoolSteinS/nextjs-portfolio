import ProjectCard from "./ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://steins-portfolio.herokuapp.com/api/projects/")
      .then((res) => {
        setProjects(res.data);
        console.log(projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          {projects.map((project) => (
            <ProjectCard key={project._id} data={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
