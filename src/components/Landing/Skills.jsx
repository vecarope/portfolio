import { useInView } from "framer-motion";
import { useRef } from "react";
import SkillCards from "./SkillCards.jsx";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className="grid grid-cols-3 gap-4" id="skills" ref={ref}>
        <div className="grid-span-2">
          <div className="hidden lg:block relative h-96 w-96">
            <div className="h-56 w-56 text-amber-400 absolute -z-10 ml-20 left-20">
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
                <h2 className="text-3xl text-[#414be3] sm:text-4xl xl:text-5xl">
                  Mis <span className="font-bold">Skills</span>
                </h2>
                <p className='text-2xl my-3 text-blue-600 tracking-wide line-clamp-3 leading-relaxed overline'>Selecciona un stack para conocer más detalles...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mx-3 lg:col-span-2 lg:backdrop:mr-10">
          <SkillCards />
        </div>
      </div>
    </>
  );
};

export default Skills;
