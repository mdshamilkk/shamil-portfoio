export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 lg:py-44 px-5 sm:px-6 overflow-hidden bg-[#050816]"
    >
      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/[0.08] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">

        <p className="text-cyan-400 uppercase tracking-[5px] text-xs font-semibold">
          Let's Work Together
        </p>

        <h2 className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95]">
          Ready To Turn
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
            Marketing Into Growth?
          </span>
        </h2>

        <p className="mt-8 max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg leading-relaxed">
          If you're looking to improve your Meta Ads, generate more qualified
          leads or build a stronger growth strategy, let's start a conversation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">

          <a
            href="YOUR_WHATSAPP_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.03]"
          >
            Chat on WhatsApp

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="shamildigimark@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400/40 bg-white/[0.03] hover:bg-white/[0.06] font-semibold transition-all"
          >
            Send an Email
          </a>

        </div>

        <p className="mt-10 text-xs uppercase tracking-[3px] text-zinc-600">
          Available for freelance projects & collaborations
        </p>

      </div>
    </section>
  );
}