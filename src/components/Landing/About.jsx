

const About = () =>
{
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-6 lg:grid-rows-1 w-screen">
        <div className="col-span-4" id="about-me">
          <div className="my-10 py-18 px-5 md:p-40 md:pr-4">
            <div className="group relative mx-6 w-250 h-150 rounded-md border bg-[#b18bfb] text-white py-10 px-8 shadow-lg transform hover:scale-105 transition duration-700 ease-out">
              <p className="mt-2 font-sans text-4xl font-bold">
                Soy Verónica...
              </p>
              <p className="md:text-2xl mt-4 text-justify">
                <strong className="text-[#ffdb58] text-3xl  bg-[#9340ff]">Desarrolladora Front-End</strong>, soy resolutiva al enfrentar nuevos desafíos, me adapto fácilmente a los cambios. Me
                interesa formar parte de equipos multidisciplinarios y mi mayor motivación es trabajar para la gente, aportando
                soluciones innovadoras a sus problemáticas.
                Tengo experiencia en el uso de <strong className="text-[#ffdb58] text-3xl bg-[#9340ff]">Javascript, React.js, Angular, Python, SQL y Django</strong>. Mi creatividad y constancia me
                llevan a aportar ideas y a implementar soluciones desafiantes e innovadoras.<strong className="text-[#ffdb58]"> Soy curiosa y apasionada por las culturas, las
                  tecnologías, el diseño, las artes y la fotografía ,</strong> me gusta la vida outdoor, viajar y conocer nuevos lugares.<strong className="text-[#ffdb58]"> DOGLOVER! y amo el café,</strong> mas si es mientras codeo...
              </p>

              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-purple-500 px-10 opacity-0 transition group-hover:opacity-100">
                <a className="text-5xl font-bold">Sobre mi..</a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-2">
          <div className="item-center my-12 mr-10 scale-75">
            <div className=" h-28 w-28 text-gray-300 absolute a-z-10 -right-20 -bottom-20">
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
                      strokeWidth="1"
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
            <div className="flex-col items-center justify-center col-span-1 hidden lg:block">
              <div className="sticky p-5 ">
                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-100"></div>
                <img
                  className="relative z-20 w-full rounded-full"
                  src={"/img/perfil.jpeg"}
                />
              </div>
            </div>
            <div className="hidden sm:block h-28 w-28 text-gray-300 absolute a-z-10 -right-20 -bottom-20">
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
                      strokeWidth="1"
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
