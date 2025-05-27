import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiences from "./components/Expériences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
   <>
      <div className="p-5 md:px-[10%]">
        <Navbar />
        <Home />
      </div>

      <About />
      <Experiences />
      <Projects/>

      <div className="p-5 md:px-[15%]">
        
      </div>

      <Footer/>

      
   </>
  )
}