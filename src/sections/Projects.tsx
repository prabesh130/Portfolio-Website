const PROJECTS = [
  {
    number: "01",
    title: "NPL Fantasy",
    description:
      "A fantasy sports platform for the Nepal Premier League. Users draft players, build squads, and compete on live leaderboards driven by real match data.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://npl-fantasy.vercel.app/",
    github: null,
    status: "Live",
  },
  {
    number: "02",
    title: "ChainBallot",
    description:
      "A tamper-proof online voting system built on the blockchain. Every vote is recorded as an immutable transaction, ensuring full transparency and auditability.",
    tags: ["Blockchain", "Solidity", "React", "Web3.js"],
    live: "https://chainballot-online-voting.vercel.app/",
    github: null,
    status: "Live",
  },
  {
    number: "03",
    title: "Digit Recognizer",
    description:
      "A handwritten digit recognition engine written in C++ from scratch. Implements a neural network without any ML framework — pure linear algebra and backpropagation.",
    tags: ["C++", "Neural Network", "OpenCV"],
    live: null,
    github: "https://github.com/YOUR_USERNAME",
    status: "Open Source",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F0F0ED] py-24 px-10 font-mono">
      <div className="max-w-[980px] mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-7 h-px bg-[#C8830A]" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#C8830A]">
            Selected Work
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-16">
          <h2 className="font-serif text-[42px] leading-[1.05] text-[#1E1E1C] font-normal m-0">
            Projects I've<br />
            <em className="italic text-[#5A5A55]">built</em>
          </h2>
          <p className="text-[13px] leading-[1.75] text-[#7A7A74] max-w-[300px] self-end md:text-right">
            A selection of work spanning full-stack web, blockchain systems, and
            low-level ML engineering.
          </p>
        </div>

        {/* Project list */}
        <div className="flex flex-col divide-y divide-[#D6D6D2]">
          {PROJECTS.map((p) => (
            <div
              key={p.number}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 py-10 items-start"
            >
              {/* Number */}
              <span className="font-serif text-[13px] text-[#C8830A] pt-1">
                {p.number}
              </span>

              {/* Main content */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-serif text-[26px] font-normal text-[#1E1E1C] m-0 leading-none">
                    {p.title}
                  </h3>
                  <span
                    className={`text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm border ${
                      p.status === "Live"
                        ? "bg-[#FDF3E3] border-[#E8C07A] text-[#B08030]"
                        : "bg-[#E8E8E4] border-[#D6D6D2] text-[#9A9A94]"
                    }`}
                  >
                    {p.status === "Live" && (
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3B6D11] mr-1.5 mb-px" />
                    )}
                    {p.status}
                  </span>
                </div>

                <p className="text-[13px] leading-[1.75] text-[#5A5A55] font-light max-w-[520px] mb-5">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-[0.1em] uppercase text-[#7A7A74] border border-[#D6D6D2] px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-row md:flex-col gap-3 items-start md:items-end pt-1">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] tracking-[0.12em] uppercase text-[#F0F0ED] bg-[#1E1E1C] px-4 py-2.5 rounded-sm no-underline whitespace-nowrap hover:bg-[#C8830A] transition-colors"
                  >
                    Live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] tracking-[0.12em] uppercase text-[#5A5A55] border border-[#C0C0BB] px-4 py-2.5 rounded-sm no-underline whitespace-nowrap hover:border-[#C8830A] hover:text-[#C8830A] transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex items-center justify-between mt-12 pt-10 border-t border-[#D6D6D2]">
          <span className="text-[12px] tracking-[0.1em] uppercase text-[#9A9A94]">
            More on GitHub
          </span>
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.12em] uppercase text-[#5A5A55] border border-[#C0C0BB] px-5 py-2.5 rounded-sm no-underline hover:border-[#C8830A] hover:text-[#C8830A] transition-colors"
          >
            View All Projects ↗
          </a>
        </div>

      </div>
    </section>
  );
}