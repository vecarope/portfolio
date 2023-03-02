import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 w-screen">
        <div className="col-span-4" id="about-me">
          <div className="my-10 py-18 px-5 md:p-40 md:pr-4">
            <div className="group relative mx-6 w-250 h-150 rounded-md border bg-purple-400 text-white py-10 px-8 shadow-lg transform hover:scale-105 transition duration-700 ease-out">
              <h3 className=" text-lg md:text-2xl uppercase">Hola! </h3>
              <p className="mt-2 font-sans text-3xl font-bold">
                Soy Verónica...
              </p>
              <p className="md:text-lg mt-4 text-justify">
                Licenciada en artes visuales y gestora cultural, desarrolladora
                Front-End y Python en constante aprendizaje desde el 2021.
                Responsable y resolutiva al enfrentar nuevos desafíos, adaptable
                al cambio, me interesa ser parte de equipos multidisciplinarios.
                Mi gran motivación es trabaja para la gente, aportando e
                implementando soluciones a sus problemáticas. Conocimientos en
                Javascripts, Vue.JS, React.JS, Angular, Python, SQL y Django.
                Soy constante y creativa, aportando ideas e implementando
                acciones innovadoras y desafiantes. Curiosa de las culturas,
                tecnologías, diseño, arte y fotografía. Soy constante y
                creativa, aportando ideas e implementando acciones innovadoras y
                desafiantes. Curiosa de las culturas, tecnologías, diseño, arte
                y fotografía.
              </p>

              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-purple-500 px-10 opacity-0 transition group-hover:opacity-100">
                <a className="text-5xl font-bold">Sobre mi..</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="item-center my-12 mr-10 scale-75">
            <div class="hidden sm:block h-28 w-28 text-gray-300 absolute a-z-10 -right-20 -bottom-20">
              <svg
                id="patternId"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="b"
                    patternUnits="userSpaceOnUse"
                    width="40"
                    height="40"
                    patternTransform="scale(0.5) rotate(0)"
                  >
                    <rect x="0" y="0" width="100%" height="100%" fill="none" />
                    <path
                      d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                      stroke-width="1"
                      stroke="none"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="800%"
                  height="800%"
                  transform="translate(0,0)"
                  fill="url(#b)"
                />
              </svg>
            </div>
            <div class="flex-col items-center justify-center col-span-1 hidden lg:block">
              <div class="sticky p-5 ">
                <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-100"></div>
                <img
                  class="relative z-20 w-full rounded-full"
                  src="/public/img/perfil.jpeg"
                />
              </div>
            </div>
            <div class="hidden sm:block h-28 w-28 text-gray-300 absolute a-z-10 -right-20 -bottom-20">
              <svg
                id="patternId"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="b"
                    patternUnits="userSpaceOnUse"
                    width="40"
                    height="40"
                    patternTransform="scale(0.5) rotate(0)"
                  >
                    <rect x="0" y="0" width="60%" height="60%" fill="none" />
                    <path
                      d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                      stroke-width="1"
                      stroke="none"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  transform="translate(0,0)"
                  fill="url(#b)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
