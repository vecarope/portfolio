import proyect from "../../data/dataProyect";
import { useInView } from 'framer-motion';
import { useRef } from "react";

const Card = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div  className="h-screen" ref={ref}>
        <div className="grid grid-cols-4 md:grid-cols-8 my-1 ml-10">
          <div className=" md:col-span-1 placeholder:md:col-span-2">
            <div className="hidden md:block relative h-96 w-96 mr-0">
              <div className="h-56 w-56 text-amber-400 absolute -z-10 ml-10 left-20 top-20" id="proyect">
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
                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="none"
                      />
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
                <div  style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
                <h2  className=" text-md md:text-3xl text-[#414be3]  xl:text-5xl">
                  Mis <span className="font-bold">Proyectos</span>
                </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container flex justify-center flex-col md:flex-row mx-1 md:mx-16">
          {proyect.map((element) => (
            <div  key={element.id} className="md:px-2 scale-75 w-auto gap-2 transform hover:scale-90 transition duration-700 ease-out">
              <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
              <div className="relative bg-purple-400 text-gray-50 p-8 space-y-6 border-4 border-gray-700">
                <div className="h-2 w-20 bg-[#FBCA1B] "></div>
                <div className="mx-0.5 border-4 border-gray-600 ">
                  <img
                    src={element.img}
                    alt={element.name}
                    className="group-hover:bg-purple-800 "
                    data-tooltip-target="tooltip-hover"
                    data-tooltip-trigger="hover"
                  />
                  <div
                    id="tooltip-hover"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    {element.type}
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <p className="text-2xl font-bold text-white">{element.name}</p>
                <p className="leading-snug text-gray-200 text-xl">
                  {element.desc}
                </p>
                <a
                  href={element.repo}
                  className="block text-[#fcd571] font-bold text-xl"
                >
                  Repositorio
                </a>
                <a
                  href={element.link}
                  className="block text-[#fcd571] font-bold text-xl"
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
  );
};

export default Card;
