import Title from "./Title"
import img_ss1 from '../assets/img_ss1.jpg'
import { CalendarSync, LetterText, Paintbrush, ArrowDownFromLine } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "HTML, CSS, Javascript, React JS, React Native, Bootstrap, Tailwind CSS.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Python, Django, Next JS, Node JS.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Réseaux Informatiques",
        description: "Switch, Routeur, Point d'accès, Parefeu, Serveur. Certifié CCNA.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

const About = () => {
    return (
        <div className="bg-stone-950 p-10 mb-10 md:mb-32" id="About">
            <Title title="À propos" />
            <div className="flex justify-center items-center ">
                <div className="hidden md:block">
                    <img src={img_ss1} alt="" className="border-8 border-accent animate-ssPortfolioImg w-96 object-cover rounded-xl"
                    style={{borderRadius : "80%"}}
                    />
                </div>

                <div className="md:ml-4 space-y-4 animate-pulse">
                    {aboutSections.map((section) => (
                        <div key={section.id}
                            className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
                        >
                            <div className="mb-2 md:mb-0">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">
                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))

                    }
                </div>

            </div>
             <a href="cv.pdf" download className="flex items-center justify-center gap-2 px-6 py-3 rounded-full md:text-2xl border-4 border-accent text-accent transition duration-200 ease-in-out hover:bg-accent hover:text-white hover:border-white md:w-fit mt-10">
                <ArrowDownFromLine className="md:w-10 md:h-10 mr-2" />
                Télécharger mon CV
            </a>
        </div>
    )
}

export default About