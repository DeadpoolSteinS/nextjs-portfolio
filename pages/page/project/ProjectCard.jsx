import Image from "next/image";

const ProjectCard = (props) => {
  return (
    <a href="#" className="relative">
      <Image
        className="rounded"
        src={props.data.image}
        alt=""
        width="400"
        height="300"
      />
      <div className="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
        <div>
          <p className="font-bold">{props.data.title}</p>
          <p className="line-clamp-2">{props.data.desc}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
