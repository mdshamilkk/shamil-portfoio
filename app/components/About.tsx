import FadeUp from "./FadeUp";

export default function About() {
  const strengths = [
    {
      number: "01",
      title: "Data-Driven Strategy",
      description:
        "Every decision is guided by campaign data, audience behavior and measurable business objectives.",
    },
    {
      number: "02",
      title: "Creative Testing",
      description:
        "Testing different angles, hooks and creatives to discover what actually drives attention and conversions.",
    },
    {
      number: "03",
      title: "Continuous Optimization",
      description:
        "Monitoring performance and improving campaigns to get more value from every marketing rupee.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-28 lg:py-36 px-5 sm:px-6 overflow-hidden bg-[#070D19]"
    >
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT SIDE */}

          <FadeUp>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-cyan-400" />

                <span className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold">
                  About Me
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
                Growth Is More Than
                <span className="block text-zinc-500">
                  Just Running Ads.
                </span>
              </h2>

              <div className="mt-10 space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
                <p>
                  I'm <span className="text-white font-semibold">Shamil Ahmad</span>,
                  a performance-focused digital marketer helping businesses
                  grow through strategic advertising, creative testing and
                  data-driven decision making.
                </p>

                <p>
                  My focus is on understanding the business first, identifying
                  opportunities and building marketing strategies designed
                  around real goals — not vanity metrics.
                </p>

                <p>
                  From Meta Ads and ecommerce growth to lead generation and
                  conversion strategy, I focus on turning attention into
                  measurable business results.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 mt-10 text-cyan-400 font-semibold group"
              >
                Let's work together

                <span className="w-10 h-10 rounded-full border border-cyan-400/30 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-black group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </FadeUp>

          {/* RIGHT SIDE */}

          <div className="space-y-4">
            {strengths.map((item) => (
              <FadeUp key={item.number}>
                <div className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8 overflow-hidden hover:border-cyan-400/30 transition-all duration-500">

                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-400/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex gap-6">
                    <span className="text-4xl sm:text-5xl font-black text-white/10 group-hover:text-cyan-400/30 transition-colors">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}