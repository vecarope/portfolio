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
            <div
              className="h-56 w-56 text-amber-400 absolute -z-10 left-20 top-10"
              id="gallery"
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
                <h2 className="text-md md:text-3xl text-[#414be3]  xl:text-5xl">
                  Galería <span className="font-bold">Fotográfica</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-cols-3 text-4xl">
          <p className="text-blue-600 tracking-wide line-clamp-3 leading-relaxed overline">
            Una de las cosas que mas disfruto, <br/> es la fotografía,<br/>al igual que hacer galerias!
          </p>
        </div>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 mx-10">
        {dataPhotos.map((element) => (
          <img
            key={element.id}
            src={element.img}
            className="mb-4"
            alt={element.id}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
