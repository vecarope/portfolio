import projects from "../../data/dataProject";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Card = () =>
{
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 ml-10" ref={ref}>
        <div className="hidden md:block relative h-96 w-96 mr-0  pt-15">
          <div
            className="h-56 w-56 text-amber-400 absolute -z-10 ml-10 left-20 top-20"
            id="proyect"
          >
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(1) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="#2ACCBB"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h2 className=" text-md md:text-3xl text-[#414be3]  xl:text-5xl">
                Mis <span className="font-bold">Proyectos</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="md:px-2 scale-75 w-auto transform hover:scale-90 transition duration-700 ease-out"
          >
            <div className="absolute  h-full w-full "></div>
            <div className="relative bg-purple-400 text-gray-50 p-8 space-y-6  border-[#FBCA1B] border-b-[18px] border-r-[18px]">
              <div className="bg-[#FBCA1B] h-2 w-20 "></div>
              <div className="mx-0.5 border-4 border-gray-600">
                <img src={project.img} alt={project.name} className="w-auto" />
              </div>
              <p className="text-4xl font-bold text-white">{project.name}</p>
              <p className="leading-snug text-gray-200 text-2xl">
                {project.desc}
              </p>
              <div className="flex flex-wrap">
              <span className="bg-purple-100 text-purple-800 text-lg font-medium m-2 px-3 py-1 rounded border-2 border-purple-700">
                {project.type}
            
              </span>
              <span className="bg-purple-100 text-purple-800 text-lg font-medium m-2 px-3 py-1 rounded border-2 border-purple-700">
          
              {project.librery}
            
              </span>
              <span className="bg-purple-100 text-purple-800 text-lg font-medium m-2 px-3 py-1 rounded  border-2 border-purple-700">
                {project.css}
            
              </span>
              </div>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="block text-[#fcd571] font-bold text-2xl"
              >
                Repositorio
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="block text-[#fcd571] font-bold text-2xl"
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
