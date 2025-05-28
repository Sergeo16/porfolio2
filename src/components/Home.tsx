import { ReactTyped } from "react-typed";
import { Mail } from "lucide-react";
import img_ss2 from "../assets/img_ss2.jpg";
// import "./Home.css"

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 px-4"
    >
      <div className="flex flex-col ">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, 
          <br /> <br />  
          <span className="text-accent">
            <ReactTyped
              strings={[
                "je répond au nom de Serge SATCHI",
                "Développeur FullStack",
                "Ingénieur en Réseaux Informatiques",
                "certifié CCNA & ayant ",
                "plus de 10 ans d'expériences"
              ]}
              typeSpeed={100}
              backSpeed={100}
              backDelay={1000}
              loop
            />
          </span>
        </h1>

        <a
            href="#Contact"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full md:text-2xl border-4 border-accent text-accent transition duration-200 ease-in-out hover:bg-accent hover:text-white hover:border-white md:w-fit mt-10"
            >
            <Mail className="md:w-10 md:h-10 mr-2" />
            Contactez-moi
        </a>


        {/* <a href="#Contact" className="btn btn-accent md:w-fit mt-10">
          <Mail className="w-5 h-5 mr-2" />
          Contactez-moi
        </a> */}
      </div>

      <div className="md:ml-20 mb-8 md:mb-0">
        <img 
          src={img_ss2}
          alt="Serge SATCHI"
          className="animate-ssPortfolioImg w-72 h-72 md:w-96 md:h-96 border-8 border-accent shadow-xl"
          style={{
            borderRadius: "30% 70% 70% 30%",
          }}
        />
      </div>
    </div>
  );
};

export default Home;












// import { Mail } from "lucide-react"
// import img_ss2 from '../assets/img_ss2.jpg'


// const Home = () => {
//     return (
//         <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

//             <div className="flex flex-col ">
//                 <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
//                     Bonjour, <br /> je suis {" "}
//                     <span className="text-accent">Serge SATCHI</span>
//                 </h1>

//                 <p className="my-4 text-md text-center md:text-left">
//                     Je suis un développeur fullstack <br />
//                     avec 5 ans d'expérience, utilisant React <br /> et Node.js. Contactez-moi si vous avez besoin
//                     de mes services.
//                 </p>
//                 <a href="" className=" btn btn-accent md:w-fit">
//                     <Mail className="w-5 h-5" />
//                     Contactez-moi
//                 </a>

//             </div>

//             <div className="md:ml-60">
//                 <img src={img_ss2} alt="" className="w-96 h-96 border-8 border-accent shadow-xl" 
//                 style={{
//                     borderRadius : "30% 70% 70% 30%"
//                 }}
//                 />
//             </div>
//         </div>
//     )
// }

// export default Home