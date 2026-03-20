import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    // Replace with your preferred form service (Formspree, EmailJS, etc.)
    // Example with Formspree: fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: data })
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#F0F0ED] py-24 px-10 font-mono">
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
            Contact
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="font-serif text-[42px] leading-[1.05] text-[#1E1E1C] font-normal m-0 mb-4">
              Let's work<br />
              <em className="italic text-[#5A5A55]">together</em>
            </h2>
            <p className="text-[13px] leading-[1.75] text-[#7A7A74] font-light mb-8 max-w-[300px]">
              Open to internships, collaborations, and interesting projects.
            </p>

            <div className="flex flex-col gap-3">
              <a href="mailto:adhikariprabesh828@gmail.com"
                className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A55] no-underline hover:text-[#C8830A] transition-colors">
                adhikariprabesh828@gmail.com ↗
              </a>
              <a href="https://github.com/prabesh130" target="_blank" rel="noreferrer"
                className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A55] no-underline hover:text-[#C8830A] transition-colors">
                github.com/prabesh130 ↗
              </a>
              <a href="https://www.linkedin.com/in/prabesh-babu-adhikari-007431217" target="_blank" rel="noreferrer"
                className="text-[11px] tracking-[0.1em] uppercase text-[#5A5A55] no-underline hover:text-[#C8830A] transition-colors">
                LinkedIn ↗
              </a>
            </div>

            <div className="flex items-center gap-2.5 mt-10 bg-[#FDF3E3] border border-[#E8C07A] px-4 py-2.5 rounded-sm w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B6D11] shrink-0" />
              <span className="text-[10px] tracking-[0.12em] uppercase text-[#B08030]">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {sent ? (
              <div className="border border-[#E8C07A] bg-[#FDF3E3] rounded-sm px-6 py-8 text-center">
                <p className="font-serif text-[22px] text-[#7A4F05] font-normal mb-1">Message sent.</p>
                <p className="text-[12px] text-[#B08030] tracking-[0.08em]">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.14em] uppercase text-[#9A9A94]">Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your name"
                      className="bg-[#E8E8E4] border border-[#D6D6D2] rounded-sm px-3 py-2.5 text-[12px] text-[#1E1E1C] placeholder-[#AAAAA4] outline-none focus:border-[#C8830A] transition-colors font-mono"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] tracking-[0.14em] uppercase text-[#9A9A94]">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="bg-[#E8E8E4] border border-[#D6D6D2] rounded-sm px-3 py-2.5 text-[12px] text-[#1E1E1C] placeholder-[#AAAAA4] outline-none focus:border-[#C8830A] transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.14em] uppercase text-[#9A9A94]">Subject</label>
                  <input
                    name="subject"
                    required
                    placeholder="What's this about?"
                    className="bg-[#E8E8E4] border border-[#D6D6D2] rounded-sm px-3 py-2.5 text-[12px] text-[#1E1E1C] placeholder-[#AAAAA4] outline-none focus:border-[#C8830A] transition-colors font-mono"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.14em] uppercase text-[#9A9A94]">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="bg-[#E8E8E4] border border-[#D6D6D2] rounded-sm px-3 py-2.5 text-[12px] text-[#1E1E1C] placeholder-[#AAAAA4] outline-none focus:border-[#C8830A] transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="text-[11px] tracking-[0.12em] uppercase text-[#F0F0ED] bg-[#1E1E1C] px-6 py-3 rounded-sm hover:bg-[#C8830A] transition-colors w-fit font-mono"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-[#D6D6D2] flex justify-between items-center">
          <span className="text-[11px] tracking-[0.08em] text-[#9A9A94]">
            Based in Kathmandu, Nepal
          </span>
          <span className="text-[11px] tracking-[0.08em] text-[#C0C0BB]">
            © {new Date().getFullYear()} Prabesh Babu Adhikari
          </span>
        </div>

      </div>
    </section>
  );
}