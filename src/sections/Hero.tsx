import { motion } from "framer-motion";
import profilePhoto from '../assets/images/profile.jpeg';

const Hero: React.FC = () => {
  const handleProjectView = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-red -600 text-white text-center px-4">
      <div className="max-w-3xl">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          src={profilePhoto}
          alt="Prabesh"
          className="w-64 h-64 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl object-cover"
        />
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          className="font-sans text-5xl  text-black mb-2"
        >
          ---Hi there,I'm---
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="font-serif text-5xl text-2xl mb-8 text-black font-bold mb-4"
        >
          Prabesh Babu Adhikari
        </motion.h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-8">
          I’m an undergraduate Computer Engineering student at Thapathali
          Campus, IOE, passionate about AI and machine learning. I work on data
          preprocessing, model development, and deploying practical AI
          solutions. As Secretary of Tensor Club, I promote ML learning and
          organize technical events while growing as an AI engineer.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleProjectView}
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={handleProjectView}
            className="bg-black/40 backdrop-blur-md border-white/20 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="https://github.com/prabesh130"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-8 h-8 text-black hover:text-gray-700 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.88-.39c.98 0 1.97.13 2.88.39 2.18-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.7.42.37.8 1.1.8 2.21 0 1.6-.01 2.88-.01 3.27 0 .31.21.67.8.56C20.71 21.43 24 17.1 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
         <a href="https://www.linkedin.com/in/prabesh-babu-adhikari-007431217/" target="_blank" rel="noopener noreferrer">
    <svg className="w-8 h-8 text-black hover:text-grey-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.1 8.5H4.9V24H.1V8.5zM8.5 8.5H13v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-4.8v-7.2c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8.5V8.5z"/>
    </svg>
  </a>
        </div>
      </div>
    </section>
  );
};
<div className="bg-red-500 text-white p-10">TEST</div>;
export default Hero;
