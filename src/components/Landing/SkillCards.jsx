import dataSkills from "../../data/dataSkills.js";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const SkillCards = () => {
  const data = [
    {
      type:1,
      label: "Front-End",
      value: "Front-end",
      desc: `Tengo sólidos conocimientos en Javascript, he trabajado con  React y Angular para crear aplicaciones web complejas y optimizadas. En React, he creado componentes reutilizables y he implementado gestión de estado y APIs externas. En Angular, he desarrollado Single Page Applications. Además, tengo experiencia en el uso de Material, Bootstrap y Tailwind para crear diseños atractivos y funcionales con un enfoque en la usabilidad y la experiencia del usuario.`,
    },
    {
      type:2,
      label: "Back-End",
      value: "Back-End",
      desc: `Tengo experiencia en manejo de JWT, migraciones de bases de datos y conexiones con bases de datos relacionales. Además, tengo conocimientos en la definición de estructuras de datos y su implementación en aplicaciones web y servicios API. También he trabajado en la creación de endpoints para permitir a los clientes interactuar con los datos almacenados en la base de datos a través de solicitudes HTTP`,
    },
    {
      type:3,
      label: "Herramientas",
      value: "Herramientas",
      desc: ` Tengo experiencia en el uso de herramientas para desarrollar proyectos de software eficientemente, como Git y GitHub para controlar el versionamiento del código y colaborar con otros desarrolladores. Manejo en Docker  para crear y administrar contenedores de aplicaciones.

      En el uso de PgAdmin para interactuar con bases de datos PostgreSQL. Auth0 y Firebase para la autenticación y autorización de usuarios. También he trabajado con Figma para diseñar interfaces de usuario y con Jira para la gestión de proyectos ágiles.`,
    },

  ];
  return (
    <Tabs id="custom-animation" value="html">
    <TabsHeader className="bg-[#18b19d] text-[#065e5a]">
      {data.map(({ label, value }) => (
        <Tab key={value} value={value}  className="text-sm md:text-3xl text-bold">
          {label}
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody
    className="bg-[#469d9a] mt-1 "
      animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
      }}
    >
      {data.map(({ value, desc, type }) => (
        <TabPanel key={value} value={value} className="border-b-8 border-r-8 border-[#f9cc2a]  text-white lg:text-2xl text-center h-auto w-fit" >
          {desc}
          <div className="grid grid-cols-7 gap-4 md:grid-cols-12 lg:gap-2  lg:mx-8 my-5 lg:grid-cols-7 items-center">
        {dataSkills
                  .filter( element => element.type === type )
                  .map( element => (
                    <div className="lg:w-35 md:w-20 w-15" key={element.id}>
                      <img src={element.img} alt={element.language} className="md:scale-75" />
                      <p className="text-center text-[9px] lg:text-base">{element.language}</p>
                    </div>
                  ))}
          </div>
        </TabPanel>
  ))}
    </TabsBody>
  </Tabs>
  )
}

export default SkillCards