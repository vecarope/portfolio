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
      desc: `Tengo sólidos conocimientos en Javascript y he trabajado con  React y Angular para crear aplicaciones web complejas y optimizadas. En React, he creado componentes reutilizables y he implementado gestión de estado y APIs externas. En Angular, he desarrollado Single Page Applications. Además, tengo experiencia en el uso de Material, Bootstrap y Tailwind para crear diseños atractivos y funcionales con un enfoque en la usabilidad y la experiencia del usuario.`,
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
    <TabsHeader className="bg-[#23c8a1] border-[#f9cc2a] ">
      {data.map(({ label, value }) => (
        <Tab key={value} value={value}  className="text-2xl text-bold">
          {label}
        </Tab>
      ))}
    </TabsHeader>
    <TabsBody
    className="bg-[#328b85] border-b-8 border-r-8 border-[#f9cc2a]  "
      animate={{
        initial: { y: 250 },
        mount: { y: 0 },
        unmount: { y: 250 },
      }}
    >
      {data.map(({ value, desc, type }) => (
        <TabPanel key={value} value={value} className="text-white text-2xl m-5 text-center h-auto w-fit" >
          {desc}
          <div className="grid grid-cols-12 gap-2 md:gap-5 md:mx-8 my-5 md:grid-cols-7 items-center">
        {dataSkills
                  .filter( element => element.type === type )
                  .map( element => (
                    <div className="md:w-20 items-center" key={element.id}>
                      <img src={element.img} alt={element.language} className="md:scale-75" />
                      <p>{element.language}</p>
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