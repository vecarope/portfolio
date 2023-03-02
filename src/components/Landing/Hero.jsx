import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-gradient-to-r  from-green-400 to-purple-600" id="hero">
        <div className="mx-auto px-10 py-20 md:py-40 sm:max-w-xl md:max-w-full md:px-30 lg:max-w-screen-xl lg:px-0.5">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="w-full h-full">
              <div className="lg:max-w-xl lg:pr-5">
                <h2 className="mb-6 max-w-lg text-5xl font-bold leading-snug tracking-tight text-white sm:text-7xl sm:leading-snug">
                  Hola
                  <span className="my-1 inline-block border-b-8 border-white bg-[#2ACCBB] px-4 font-bold text-white">
                    Soy Verónica!
                  </span>
                </h2>
                <p className="text-4xl text-[#FBCA1B]">
                  Desarrolladora Web Front-end
                </p>
              </div>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <button
                  onClick={() => window.open("/src/doc/cv.Caro.pdf", "_blank")}
                  className="btn group inline-flex items-center text-2xl  text-white"
                >
                  Descargar CV
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="">
              <motion.div
                animate={{ x: -100 ,
                rotate:360 }}
                transition={{ duration: 4 }}
                class="flex flex-col items-center justify-center col-span-1 scale-75"
              >
                <div class="relative p-5 scale-75">
                  <div class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-teal-100"></div>
                  <img
                    class="relative z-20 w-full rounded-full"
                    src="/public/img/foto.png"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
