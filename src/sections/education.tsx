import { motion } from "framer-motion";

const EDUCATION = [
  {
    number: "01",
    title: "Bachelor of Computer Engineering",
    institution: "IOE Thapathali Campus",
    period: "2022 — Present",
    description:
      "Currently focusing on AI, machine learning, and full-stack software development.",
    active: true,
  },
  {
    number: "02",
    title: "High School",
    institution: "Kist College and SS",
    period: "2020 — 2022",
    description:
      "Completed higher secondary education with a focus on science and mathematics.",
    active: false,
  },
  {
    number: "03",
    title: "Primary Education",
    institution: "Chainpur English Boarding School",
    period: "2006 — 2019",
    description: "",
    active: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#F0F0ED] py-24 px-10 font-mono">
      <div className="max-w-[980px] mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-7 h-px bg-[#C8830A]" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#C8830A]">
            Education
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <h2 className="font-serif text-[42px] leading-[1.05] text-[#1E1E1C] font-normal m-0">
            Academic<br />
            <em className="italic text-[#5A5A55]">background</em>
          </h2>
          <p className="text-[13px] leading-[1.75] text-[#7A7A74] max-w-[280px] md:text-right">
            A foundation built across thirteen years of formal education, now applied to engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical amber line */}
          <div className="absolute left-[30px] top-3 bottom-3 w-px bg-[#D6D6D2] hidden md:block" />

          <div className="flex flex-col gap-0">
            {EDUCATION.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 pb-12 last:pb-0"
              >
                {/* Number + dot */}
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.15 + 0.1, ease: "easeOut" }}
                    className={`w-3 h-3 rounded-full border-2 mt-1 ${
                      item.active
                        ? "bg-[#C8830A] border-[#C8830A]"
                        : "bg-[#F0F0ED] border-[#C0C0BB]"
                    }`}
                  />
                  <span className="font-serif text-[11px] text-[#C8830A] tracking-wide hidden md:block">
                    {item.number}
                  </span>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className={`pb-10 border-b border-[#D6D6D2] last:border-0 cursor-default ${
                    item.active ? "border-l-2 border-l-[#C8830A] pl-4 ml-[-4px]" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-serif text-[22px] font-normal text-[#1E1E1C] m-0 leading-none">
                        {item.title}
                      </h3>
                      {item.active && (
                        <span className="flex items-center gap-1.5 text-[10px] tracking-[0.12em] uppercase bg-[#FDF3E3] border border-[#E8C07A] text-[#B08030] px-2.5 py-1 rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] inline-block" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] tracking-[0.1em] uppercase text-[#9A9A94] shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-[11px] tracking-[0.12em] uppercase text-[#C8830A] mb-3">
                    {item.institution}
                  </p>

                  {item.description && (
                    <p className="text-[13px] leading-[1.75] text-[#5A5A55] font-light max-w-[480px]">
                      {item.description}
                    </p>
                  )}

                  {/* Hover underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.25 }}
                    className="h-px bg-[#C8830A] mt-4 origin-left"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}