import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Navbar from "./sections/Navbar";
import Education from "./sections/education";
function app (){
    return(
        <>
              <Navbar/>
    <div className="pt-9">
  
        <Hero/>
        <Projects/>
        
        <Education/>
    </div>
    </>
    );
}
export default app