import { useState, useEffect } from "react";

const ROLES = ["Full Stack Developer", "AI / ML Engineer", "Backend Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="bg-[#F0F0ED] min-h-screen flex flex-col font-mono">

      {/* ── NAV ── */}
      <nav className="border-b border-[#D6D6D2] px-10 py-[18px]">
        <div className="max-w-[980px] mx-auto flex justify-between items-center">
          <div className="text-[13px] tracking-[0.18em] uppercase text-[#2A2A28]">
            P<span className="text-[#C8830A]">.</span>B
            <span className="text-[#C8830A]">.</span>A
          </div>

          <ul className="hidden md:flex gap-8 list-none m-0 p-0">
            {["Home", "Skills", "Projects", "Education"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-[11px] tracking-[0.12em] uppercase text-[#7A7A74] no-underline hover:text-[#2A2A28] transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="text-[11px] tracking-[0.10em] uppercase bg-[#C8830A] text-[#FFF8EE] px-4 py-2 rounded-sm no-underline"
          >
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center px-10 pt-14 pb-10 gap-12 max-w-[980px] mx-auto w-full box-border">

        {/* LEFT */}
        <div>
          {/* Typewriter eyebrow */}
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-7 h-px bg-[#C8830A]" />
            <span className="text-[11px] tracking-[0.18em] uppercase text-[#C8830A] min-w-[220px]">
              {displayed}
              <span className="animate-blink ml-px">|</span>
            </span>
          </div>

          {/* Name */}
          <h1 className="font-serif text-[54px] leading-[1.05] text-[#1E1E1C] font-normal mb-2">
            Prabesh
            <br />
            <em className="italic text-[#5A5A55]">Babu</em>
            <br />
            Adhikari
          </h1>

          {/* Sub-role row */}
          <div className="flex items-center gap-3 mb-7">
            <span className="text-[11px] tracking-[0.14em] uppercase text-[#7A7A74]">
              Computer Engineering
            </span>
            <div className="w-[3px] h-[3px] rounded-full bg-[#C8830A] shrink-0" />
            <span className="text-[11px] tracking-[0.14em] uppercase text-[#7A7A74]">
              IOE Thapathali
            </span>
          </div>

          {/* Bio */}
          <p className="text-[13px] leading-[1.75] text-[#5A5A55] font-light max-w-[400px] mb-9 border-l-2 border-[#C8830A] pl-4">
            Undergraduate engineer building full-stack applications and practical
            AI solutions. Focused on backend systems, data pipelines, and model
            deployment. Secretary of Tensor Club — promoting ML learning across
            campus.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3">
            <a
              href="#projects"
              className="text-[11px] tracking-[0.12em] uppercase text-[#F0F0ED] bg-[#1E1E1C] px-[22px] py-[11px] rounded-sm no-underline"
            >
              View Projects
            </a>
            <a
              href="public/Prabesh-Babu-Adhikari-CV.pdf"
              download
              className="text-[11px] tracking-[0.12em] uppercase text-[#5A5A55] bg-transparent border border-[#C0C0BB] px-[22px] py-[11px] rounded-sm no-underline"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex flex-col gap-4">

          {/* Photo */}
          <div className="relative self-center w-[210px]">
            {/* Amber offset accent border */}
            <div className="absolute -top-2.5 -right-2.5 w-[210px] h-[260px] border border-[#C8830A] rounded-sm opacity-50" />
            <div className="w-[210px] h-[260px] rounded-sm relative z-10 overflow-hidden">
              <img
                src="public/WhatsApp Image 2026-03-20 at 9.10.33 AM.jpeg"
                alt="Prabesh Babu Adhikari"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { val: "10+", key: "Projects",     amber: false },
              { val: "FS",  key: "Full Stack",   amber: true  },
              { val: "AI",  key: "ML / Backend", amber: true  },
              { val: "3+",  key: "Yrs coding",   amber: false },
            ].map(({ val, key, amber }) => (
              <div
                key={key}
                className={`rounded p-3 border ${
                  amber
                    ? "bg-[#FDF3E3] border-[#E8C07A]"
                    : "bg-[#E8E8E4] border-[#D6D6D2]"
                }`}
              >
                <div className={`font-serif text-[22px] font-normal leading-none ${amber ? "text-[#7A4F05]" : "text-[#1E1E1C]"}`}>
                  {val}
                </div>
                <div className={`text-[10px] tracking-[0.1em] uppercase mt-1 ${amber ? "text-[#B08030]" : "text-[#9A9A94]"}`}>
                  {key}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER BAR ── */}
      <div className="border-t border-[#D6D6D2] px-10 py-3.5 flex justify-between items-center">
        <div className="flex gap-5">
          <a
            href="https://github.com/prabesh130"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.1em] uppercase text-[#9A9A94] no-underline hover:text-[#1E1E1C] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.1em] uppercase text-[#9A9A94] no-underline hover:text-[#1E1E1C] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] tracking-[0.08em] text-[#9A9A94]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] shrink-0" />
          Open to opportunities
        </div>

        <span className="text-[11px] tracking-[0.1em] uppercase text-[#C0C0BB]">
          Scroll ↓
        </span>
      </div>
    </div>
  );
}