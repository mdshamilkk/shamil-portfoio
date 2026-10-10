export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* BACKGROUND GLOWS */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 blur-[160px] rounded-full" />


      {/* GRID BACKGROUND */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">

        <div className="max-w-5xl">

          {/* SMALL LABEL */}

          <div className="flex items-center gap-3 mb-8">

            <span className="w-10 h-[1px] bg-cyan-400" />

            <p className="text-cyan-400 uppercase tracking-[4px] text-xs md:text-sm font-semibold">
              Performance Marketing Specialist
            </p>

          </div>


          {/* MAIN HEADING */}

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9]">

            Shamil

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Ahmad
            </span>

          </h1>


          {/* MAIN MESSAGE */}

          <h2 className="text-2xl md:text-4xl lg:text-5xl text-slate-200 mt-10 max-w-5xl font-semibold leading-tight">

            Helping Ecommerce Brands Scale Through{" "}

            <span className="text-cyan-400">
              Meta Ads.
            </span>

            <br />

            Creative Strategy & Performance Marketing.

          </h2>


          {/* DESCRIPTION */}

          <p className="text-slate-400 mt-8 max-w-2xl text-base md:text-lg leading-relaxed">

            I help businesses generate more leads, sales and measurable
            growth through high-converting Meta advertising campaigns,
            creative strategy and data-driven performance marketing.

          </p>


          {/* BUTTONS */}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            <a
              href="#case-studies"
              className="group inline-flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.03]"
            >

              View My Work

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </a>


            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/10 hover:border-cyan-400/50 bg-white/[0.03] hover:bg-white/[0.06] px-7 py-4 rounded-xl font-semibold transition-all duration-300"
            >

              Let's Work Together

            </a>

          </div>


          {/* SOCIAL PROOF / STATS */}

          <div className="grid grid-cols-3 max-w-2xl gap-4 md:gap-8 mt-16 pt-8 border-t border-white/10">

            <div>

              <h3 className="text-2xl md:text-4xl font-black text-white">
                ₹3L+
              </h3>

              <p className="text-slate-500 text-xs md:text-sm mt-2">
                Revenue Generated
              </p>

            </div>


            <div>

              <h3 className="text-2xl md:text-4xl font-black text-white">
                Meta
              </h3>

              <p className="text-slate-500 text-xs md:text-sm mt-2">
                Ads Specialist
              </p>

            </div>


            <div>

              <h3 className="text-2xl md:text-4xl font-black text-white">
                ROI
              </h3>

              <p className="text-slate-500 text-xs md:text-sm mt-2">
                Focused Strategy
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* SCROLL INDICATOR */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">

        <span className="text-[10px] uppercase tracking-[3px] text-slate-500">
          Scroll to explore
        </span>

        <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-400 to-transparent" />

      </div>

    </section>
  );
}