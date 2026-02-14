import {useState} from 'react';
const scrollToSection=(id: string)=>{
    document.getElementById(id)?.scrollIntoView({behavior:"smooth"})
}

const Navbar=()=>{
    const[isMenuOpen, setIsMenuOpen]=useState(false)

    return(
        <nav className='fixed top-0 left-0 right-0  bg-white shadow-md z-50'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3'>
            <div className='hidden md:flex space-x-8'>
                <button onClick={()=> scrollToSection("Home")} className="text-gray-400 text-xl font-semibold px-2 py-2.5 hover:text-black transition focus:outline-none rounded">Home</button>
                <button onClick={()=> scrollToSection("skills")}className="text-gray-400 text-xl font-semibold px-3 py-2.5 hover:text-black transition focus:outline-none rounded">skills</button>
                <button onClick={()=> scrollToSection("projects")}className="text-gray-400 text-xl font-semibold px-3 py-2.5 hover:text-black transition focus:outline-none rounded">Projects</button>
                <button onClick={()=> scrollToSection("Education")}className="text-gray-400  text-xl font-semibold px- py-2.5 hover:text-black transition focus:outline-none rounded">Education</button>
            </div>
        </div>
        </nav>
    )
};
export default Navbar;