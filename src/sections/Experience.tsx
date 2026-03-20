import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    number: "01",
    title: "Secretary",
    org: "Tensor Club — IOE Thapathali Campus",
    period: "2023 — Present",
    description:
      "Leading and coordinating club activities, managing administrative tasks, and organizing technical events that promote ML learning across campus.",
    tags: ["Leadership", "Event Planning", "ML Community"],
  },
  {
    number: "02",
    title: "Event Manager",
    org: "Tensor Club — IOE Thapathali Campus",
    period: "2022 — 2023",
    description:
      "Planned and executed technical workshops, seminars, and hackathons for the student engineering community.",
    tags: ["Event Management", "Workshops", "Coordination"],
  },
];

const STATS = [
  { val: "2+", label: "Years Experience" },
  { val: "5+", label: "Events Organized" },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F0F0ED] py-24 px-10 font-mono">
      <div className="max-w-[980px] mx-auto">

        {/* Section eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-7 h-px bg-[#C8830A]" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#C8830A]">
            Experience
          </span>
        </motion.div>

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16"
        >
          <h2 className="font-serif text-[42px] leading-[1.05] text-[#1E1E1C] font-normal m-0">
            Where I've<br />
            <em className="italic text-[#5A5A55]">contributed</em>
          </h2>
          <p className="text-[13px] leading-[1.75] text-[#7A7A74] max-w-[280px] md:text-right">
            Roles that shaped my ability to lead, organise, and build technical communities.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col divide-y divide-[#D6D6D2] border-t border-[#D6D6D2]">
          {EXPERIENCE.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ x: 6 }}
              className="grid grid-cols-1 md:grid-cols-[80px_1fr_140px] gap-6 py-10 items-start cursor-default"
            >
              {/* Number */}
              <span className="font-serif text-[13px] text-[#C8830A] pt-1">
                {item.number}
              </span>

              {/* Content */}
              <div>
                <h3 className="font-serif text-[26px] font-normal text-[#1E1E1C] m-0 mb-1 leading-none">
                  {item.title}
                </h3>
                <p className="text-[11px] tracking-[0.12em] uppercase text-[#C8830A] mb-4">
                  {item.org}
                </p>
                <p className="text-[13px] leading-[1.75] text-[#5A5A55] font-light max-w-[480px] mb-5">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.1em] uppercase text-[#7A7A74] border border-[#D6D6D2] px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated underline on hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                  className="h-px bg-[#C8830A] mt-5 origin-left"
                />
              </div>

              {/* Period */}
              <div className="md:text-right pt-1">
                <span className="text-[11px] tracking-[0.1em] uppercase text-[#9A9A94]">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-10 border-t border-[#D6D6D2] flex items-center justify-between"
        >
          <div className="flex gap-10">
            {STATS.map(({ val, label }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                className="cursor-default"
              >
                <div className="font-serif text-[28px] font-normal text-[#1E1E1C] leading-none">
                  {val}
                </div>
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#9A9A94] mt-1.5">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Amber accent pill */}
          <div className="hidden md:flex items-center gap-2.5 bg-[#FDF3E3] border border-[#E8C07A] px-4 py-2.5 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] shrink-0" />
            <span className="text-[10px] tracking-[0.12em] uppercase text-[#B08030]">
              Currently active
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}