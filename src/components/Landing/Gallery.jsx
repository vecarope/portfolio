import { dataPhotos } from "../../data/dataPhoto";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div className="container flex items-center" ref={ref}>
        <div className=" col-span-1 placeholder:md:col-span-2 ml-20 mt-10">
          <div className="hidden md:block relative h-96 w-96 mr-0">
            <div className="h-56 w-56 text-amber-400 absolute -z-10 left-20 top-10" id="gallery" >
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
                <h2 className="text-md md:text-3xl text-[#414be3]  xl:text-5xl">
                  Galeria <span className="font-bold">Fotografica</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-38 mx-19 bg-slate-50">
        <div className="flex items-center justify-center mx-12 md:mx-28 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {dataPhotos.map((element) => (
              <div
                key={element.id}
                className="mt-8 rounded-xl bg-white p-2 w-full h-full "
              >
                <div className="group relative flex-col overflow-hidden rounded-xs  border-4 border-gray-600">
                  <div className="absolute inset-0 h-full w-full group-hover:bg-rose-400/20 scale-75 "></div>
                  <img
                    src={element.img}
                    className="h-auto w-full object-contain"
                    alt={element.id}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
