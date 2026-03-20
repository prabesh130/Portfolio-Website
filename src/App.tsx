import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
// import Navbar from "./sections/Navbar";
import Education from "./sections/education";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
function app (){
    return(
        <>
              {/* <Navbar/> */}
    <div className="">
  
        <Hero/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
    </div>
    </>
    );
}
export default app