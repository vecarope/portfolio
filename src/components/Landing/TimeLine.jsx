import { experience } from "../../data/dataExperience";
import { education } from "../../data/dataEducation";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";

const TimeLine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div id="time-line" ref={ref} className="mt-10 mx-40 w-screnn hidden lg:block">
        <div className="flex mx-5 md:mx-10 mt-30 md:mt-10 justify-start">
          <div className="mx-5 md:mx-10">
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <h2 className="md:-mx-4 md:pl-8 md:pr-8 pt-4 pb-6 text-2xl text-[#414be3] sm:text-4xl xl:text-5xl">
                Experiencia <br /> <span className="font-bold">Laboral</span>
              </h2>
            </div>
            <a
              href="https://linkedin.com/in/vecarope"
              target="_blank"
              rel="noreferrer"
              className="inline-flex px-4 py-1 md:ml-5 items-center md:px-8 md:py-2 md:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Perfil LinkedIn
              <svg
                className="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {experience.map((element) => (
              <li className="mx-5  my-2 md:mb-10 md:ml-4" key={element.id}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {element.date}
                </time>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {element.rol}
                </h3>
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {element.company}
                </h5>
                <p className=" hidden sm:block sm:mb-4 text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                  {element.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <div className="flex mx-5 md:mx-10 my-10 md:my-20 justify-start">
            <div className="mx-5 md:mx-10" ref={ref}>
              <div
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <h2 className="md:-mx-4 md:pl-8 md:pr-8 pt-4 pb-4 text-2xl text-[#414be3] sm:text-4xl xl:text-5xl">
                  Formación <br /> <span className="font-bold">Académica</span>
                </h2>
              </div>
            </div>
            <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {education.map((element) => (
                <li className="mx-5 my-1 md:mb-5 md:ml-4" key={element.id}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {element.date}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {element.carrer}
                  </h3>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {element.institute}
                  </h5>
                  <p className=" hidden sm:block sm:mb-4 text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                    {element.type}
                  </p>
                </li>
              ))}
            </ol>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
