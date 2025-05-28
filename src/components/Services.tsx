import { FC } from "react";
import { BsCodeSlash, BsGlobeEuropeAfrica,  BsMortarboardFill } from "react-icons/bs";
import { MdSettingsSuggest } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <BsCodeSlash className="text-7xl text-accent" />,
    title: "Développement d'applications",
    description:
      "Je conçois des applications web modernes, performantes et sécurisées avec des technologies comme React, Next.js, TypeScript et Django. Mon objectif : transformer vos idées en solutions efficaces et intuitives qui répondent parfaitement à vos besoins métier.",
    link: "#contact",
  },
   {
    id: 2,
    icon: <BsGlobeEuropeAfrica className="text-7xl text-accent" />,
    title: "Administration des réseaux informatiques",
    description:
      "Je déploie, sécurise et administre des réseaux fiables et évolutifs. Avec une expertise CCNA, je garantis une connectivité optimale, une gestion efficace des ressources et une réponse rapide aux incidents pour assurer la continuité de vos services.",
    link: "#contact",
  },
  {
    id: 3,
    icon: <MdSettingsSuggest className="text-7xl text-accent" />,
    title: "Maintenance informatique et Support Technique",
    description:
      "Problèmes techniques ? Je vous accompagne avec des solutions rapides, durables et adaptées. Diagnostic, réparation, optimisation : je veille à la santé de vos équipements et à la satisfaction de vos utilisateurs.",
    link: "#contact",
  },
  {
    id: 4,
    icon: <BsMortarboardFill className="text-7xl text-accent" />,
    title: "Formations en informatique",
    description:
      "Je propose des formations pratiques et adaptées à tous niveaux : bureautique, réseaux, développement web ou cybersécurité. Avec une pédagogie claire et des résultats concrets, je vous aide à monter en compétence à votre rythme.",
    link: "#",
    target: "_blank",
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="min-h-screen py-20 px-6 md:px-16 text-gray-100">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Mes <span className="text-accent">Services</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-1 min-w-[280px] max-w-[350px] bg-zinc-900 p-8 rounded-2xl text-center border-2 border-white transition-transform hover:scale-105 hover:border-accent hover:border-4"
          >
            <div className="mb-6 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-base mb-6">{service.description}</p>
            <a
              href={service.link}
              target={service.target}
              className="inline-block border border-white text-white hover:bg-accent hover:border-4 transition-colors duration-200 rounded-full px-6 py-3 text-lg mt-4"
            >
              {service.id === 4 ? "En savoir plus" : "Contactez-moi"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;



// import Title from "./Title";

// import imgCSS from "../assets/techno/css.png";
// import imgJS from "../assets/techno/js.png";
// import imgREACT from "../assets/techno/react.png";
// import imgHTML from "../assets/techno/html.png";
// import imgNEXT from "../assets/techno/next-js.webp";
// import imgNODE from "../assets/techno/node-js.png";
// import imgTYPE from "../assets/techno/typescript.svg";
// import imgTAILWIND from "../assets/techno/tailwind.png";
// import imgPRISMA from "../assets/techno/prisma.webp";

// import google from "../assets/companies/google.png";
// import meta from "../assets/companies/meta.webp";
// import amazon from "../assets/companies/amazon.png";

// const skills = [
//     { id: 1, name: "HTML", image: imgHTML },
//     { id: 2, name: "CSS", image: imgCSS },
//     { id: 3, name: "JavaScript", image: imgJS },
//     { id: 4, name: "React", image: imgREACT },
//     { id: 5, name: "Node.js", image: imgNODE },
//     { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
//     { id: 7, name: "TypeScript", image: imgTYPE },
//     { id: 8, name: "Next.js", image: imgNEXT },
//     { id: 9, name: "Prisma", image: imgPRISMA },
// ];

// const experiences = [
//     {
//         id: 1,
//         role: "Développement d'applications",
//         description: [
//             "Je conçois et développe des sites web modernes, réactifs et optimisés pour tous les types d'appareils. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une application web complexe, je mets en œuvre les technologies les plus récentes pour répondre à vos besoins spécifiques.",
//         ],
//         image: google,
//     },
//     {
//         id: 2,
//         role: "Fullstack Developer",
//         company: "Meta",
//         period: "Jan 2021 - Août 2022",
//         description: [
//             "Création d'une plateforme interne de collaboration pour les équipes.",
//             "Mise en place d'une architecture scalable et optimisée.",
//         ],
//         image: meta,
//     },
//     {
//         id: 3,
//         role: "Frontend Developer",
//         company: "Amazon",
//         period: "Mai 2019 - Déc 2020",
//         description: [
//             "Développement d'une interface utilisateur pour Amazon Web Services.",
//             "Implémentation des tests unitaires et E2E.",
//         ],
//         image: amazon,
//     },
// ];

// const Services = () => {
//     return (
//         <div className="bg-neutral-800" id="Services">
//             <Title title="Mes services" />
//             <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
//                 <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
//                     {skills.map((skill) => (
//                         <div
//                             key={skill.id}
//                             className=" flex justify-center items-center flex-col"
//                         >
//                             <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
//                                 <img
//                                     src={skill.image}
//                                     alt={skill.name}
//                                     className="object-cover rounded-full h-full w-full"
//                                 />
//                             </div>
//                             <span className="mt-2 text-sm">{skill.name}</span>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="md:ml-4 flex flex-col space-y-4">
//                     {experiences.map((expericence) => (
//                         <div
//                             key={expericence.id}
//                             className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
//                         >
//                             <div className="flex items-center">
//                                 <img
//                                     src={expericence.image}
//                                     alt={expericence.company}
//                                     className="object-cover h-10 w-10"
//                                 />
//                                 <div className="ml-4">
//                                     <h1 className="text-xl text-accent font-bold">
//                                         {expericence.role} , {expericence.company}
//                                     </h1>
//                                     <span className="text-sm">{expericence.period}</span>
//                                 </div>
//                             </div>
//                             <ul className="list-disc ml-16 mt-2">
//                                 {expericence.description.map((desc, index) => (
//                                     <li key={index}>{desc}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;
