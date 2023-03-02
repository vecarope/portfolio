import dataSkills from "../../data/dataSkills.js";
import { useInView } from 'framer-motion';
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="grid lg:grid-cols-5 lg:grid-rows-1 h-screen w-screen mt-4" id="skills" ref={ref}>
        <div className="grid-span-2">
          <div className="hidden md:block relative h-96 w-96">
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
              <div  style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
              <h2 className="text-3xl text-[#414be3] sm:text-4xl xl:text-5xl">
                Mis <span className="font-bold">Skills</span>
              </h2></div>
            </div>
          </div>
        </div>
        <div className="grid md:col-start-2 mx-10 md:col-end-5 md:gap-8 md:ml-20 ">
          <div className="container relative md:w-350 transform hover:scale-105 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#714881] text-white p-8 space-y-6 border-4 border-gray-700">
              <div className="md:h-2 md:w-20 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Front-End</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
                Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda
                Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk andaDescriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda
              </p>
              <div className="grid grid-cols-6 md:mx-10 md:grid-cols-6">
                {dataSkills
                  .filter( element => element.type === 1 )
                  .map( element => (
                    <div className="md:w-20 item-center" key={element.id}>
                      <img src={element.img} alt={element.language} className="md:scale-75" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="container relative md:w-350  my-1 transform hover:scale-105 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#7752ad] text-white p-8 space-y-6 border-4 border-gray-700">
              <div className="h-2 w-20 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Back-End</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
              Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda
              </p>
              <div className="grid grid-cols-6 md:mx-10 md:grid-cols-6">
                {dataSkills
                  .filter( element => element.type === 2 )
                  .map( element => (
                    <div className="md:w-20 item-center" key={element.id}>
                      <img src={element.img} alt={element.language} className="md:scale-75" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="container relative md:w-350 my-1 transform hover:scale-105 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#3a9a9f] text-white p-4 md:p-8 space-y-6 border-4 border-gray-700">
              <div className="h-2 w-20 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Herramientas</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
                Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda Descriptyion your product here. menggomballah seperlunya agar
                meraka minat terhadap produk anda
              </p>
              <div className="grid grid-cols-6 gap-2 md:gap-4 md:mx-10 md:grid-cols-7">
                {dataSkills
                  .filter( element => element.type === 3 )
                  .map( element => (
                    <div className="md:w-20 items-center" key={element.id}>
                      <img src={element.img} alt={element.language} className="md:scale-75" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
