import dataSkills from "../../data/dataSkills.js";
import { useInView } from 'framer-motion';
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="grid lg:grid-cols-8 lg:grid-rows-1 h-screen w-screen mt-4" id="skills" ref={ref}>
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
        <div className="grid lg:col-start-3 ml-10 lg:col-end-8 md:gap-10 md:ml-20 ">
          <div className="container relative md:w-390 transform hover:scale-110 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#714881] text-white p-8 space-y-6 border-4 border-gray-700">
              <div className="md:h-2 md:w-40 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Front-End</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
              Tengo sólidos conocimientos en Javascript y he trabajado con React y Angular para crear aplicaciones web complejas y optimizadas. En React, he creado componentes reutilizables y he implementado gestión de estado y APIs externas. En Angular, he desarrollado Single Page Applications. Además, tengo experiencia en el uso de Material, Bootstrap y Tailwind para crear diseños atractivos y funcionales con un enfoque en la usabilidad y la experiencia del usuario.
              </p>
              <div className="grid grid-cols-12 md:mx-10 md:grid-cols-6">
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
          <div className="container relative md:w-390 my-1 transform hover:scale-110 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#7752ad] text-white p-8 space-y-6 border-4 border-gray-700">
              <div className="h-2 w-40 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Back-End</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
              Tengo experiencia en manejo de JWT, migraciones de bases de datos y conexiones con bases de datos relacionales. Además, tengo conocimientos en la definición de estructuras de datos y su implementación en aplicaciones web y servicios API. También he trabajado en la creación de endpoints para permitir a los clientes interactuar con los datos almacenados en la base de datos a través de solicitudes HTTP.
              </p>
              <div className="grid grid-cols-12 md:mx-10 md:grid-cols-6">
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
          <div className="container relative md:w-390 mt-1 mb-6 transform hover:scale-110 transition duration-700 ease-out">
            <div className="absolute -right-2 -bottom-3 bg-[#FBCA1B] h-full w-full "></div>
            <div className="relative bg-[#3a9a9f] text-white p-4 md:p-8 space-y-6 border-4 border-gray-700">
              <div className="h-2 w-40 bg-[#FBCA1B] "></div>
              <div className="text-3xl md:text-5xl font-bold text-white">Herramientas</div>
              <p className="leading-snug text-white text-md md:text-lg text-justify">
              Tengo experiencia en el uso de herramientas para desarrollar proyectos de software eficientemente, como Git y GitHub para controlar el versionamiento del código y colaborar con otros desarrolladores. Manejo en Docker  para crear y administrar contenedores de aplicaciones.

En el uso de PgAdmin para interactuar con bases de datos PostgreSQL. Auth0 y Firebase para la autenticación y autorización de usuarios. También he trabajado con Figma para diseñar interfaces de usuario y con Jira para la gestión de proyectos ágiles.
              </p>
              <div className="grid grid-cols-12 gap-2 md:gap-5 md:mx-10 md:grid-cols-7">
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
