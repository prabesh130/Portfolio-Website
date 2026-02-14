import {motion} from 'framer-motion'

const educationData = [
  {
    title: "Bachelor of Computer Engineering",
    institution: "IOE Thapathali Campus",
    period: "2022 - Present",
    description: "Currently focusing on AI, Machine Learning, and Software Development."
  },
  {
    title: "High School",
    institution: "Kist College and SS",
    period: "2020 - 2022",
    description: "Completed higher secondary education with focus on Science and Mathematics."
  },
  {
    title: "Primary Education",
    institution: "Chainpur English Boarding School",
    period: "2006 - 2019",
    description: ""
  }
];

const Education = () => {
  return (
    <section id="Education" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-16">
          Education
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-300 ml-4">
          
          {educationData.map((item, index) => (
            <div key={index} className="relative">
              {/* Animated Ball */}
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="absolute w-4 h-4 bg-black rounded-full -left-[9px] top-0"
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="mb-12 ml-6"
              >
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.institution}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.period}
                </p>

                {item.description && (
                  <p className="mt-3 text-gray-700">
                    {item.description}
                  </p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;