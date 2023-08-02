import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  return (
    data && (
      <Link href={data.projectUrl} target="_blank" className="relative">
        {/*ratio 1920x1080 = 56.25%*/}
        <div className="mt-[60%]"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0">
          <Image
            className="rounded h-full object-cover"
            src={data.images && data.images[0] && data.images[0].imageUrl}
            alt=""
            width="400"
            height="300"
          />
          <div className="absolute w-full rounded top-0 bottom-0 p-4 bg-portfolio-gradient bg-size-300 bg-position-100 hover:bg-position-0 text-white hover:text-black flex items-end transition-all duration-500">
            <div>
              <p className="font-bold">{data.name}</p>
              <p className="line-clamp-2">{data.description}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

export default ProjectCard;