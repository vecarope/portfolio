import { Link as SmoothLink } from 'react-scroll';

const Index = () => {
  return (
    <>
    <footer className="relative mt-20 bg-purple-900 px-4 pt-20" id='footer'>
      <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-green-300 bg-white p-2">
        <SmoothLink  
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
        <img className="h-full object-contain"
          src="/public/img/logo.png"
          alt="logo"
        />
        </SmoothLink>
      </div>
      <div className=" grid grid-cols-2 ml-20 w-15">
        <div className="grid-col-1">
        <p className="text-white text-6xl font-bold">Hablemos...</p>
        <p className="text-yellow-300 text-2xl">Si quieres saber más sobre mis proyectos y skills,<br/> contactame a través de las siguientes plataformas. </p>
      </div>
      <nav
        aria-label="Footer Navigation"
        className="my-auto flex item-center max-w-lg flex-row gap-6 text-center sm:flex-row sm:text-left"
      >
        <a
          className="text-white text-xl  hover:underline hover:text-yellow-300 hover:decoration-wavy"
          href="https://linkedin.com/in/vecarope"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="text-white text-xl hover:underline hover:text-yellow-300 hover:decoration-wavy"
          href="https://github.com/vecarope"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-white text-xl hover:underline hover:text-yellow-300 hover:decoration-wavy"
          href="https://www.instagram.com/vecarope"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          className="text-white text-xl hover:underline hover:text-yellow-300 hover:decoration-wavy"
          href="https://wa.me/56988798635"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a
          className="text-white text-xl hover:underline hover:text-yellow-300 hover:decoration-wavy"
          onClick={() => (window.location = "mailto:vecarope@gmail.com")}
        >
          vecarope@gmail.com
        </a>
      </nav>
      </div>
      <p className="py-10 text-center text-gray-300">
        © 2023 | Diseñado con 💜 por vecarope
      </p>
    </footer>
    </>
  );
};

export default Index;
