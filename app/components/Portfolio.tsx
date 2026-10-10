import FadeUp from "./FadeUp";

export default function Portfolio() {
  const projects = [
    {
      number: "01",
      title: "Ecommerce Brand Growth",
      description:
        "Scaled Shopify campaigns with conversion-focused Meta Ads, creative testing and continuous optimization.",
      tag: "Ecommerce",
      result: "₹4.1L+",
      resultLabel: "Sales Generated",
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/40",
    },
    {
      number: "02",
      title: "Travel Lead Generation",
      description:
        "Built targeted campaigns that generated high-intent WhatsApp conversations and booking enquiries.",
      tag: "Lead Generation",
      result: "70+",
      resultLabel: "Conversations",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
      accent: "text-violet-400",
      border: "hover:border-violet-400/40",
    },
    {
      number: "03",
      title: "SEO Growth Strategy",
      description:
        "Improved search visibility and organic growth through technical optimization, content strategy and keyword research.",
      tag: "Organic Growth",
      result: "SEO",
      resultLabel: "Growth Strategy",
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      accent: "text-emerald-400",
      border: "hover:border-emerald-400/40",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative py-24 sm:py-28 lg:py-36 px-5 sm:px-6 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-1/2 left-1/2 w-[700px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/[0.04] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <FadeUp>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-cyan-400" />

                <span className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold">
                  Selected Work
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
                Campaigns Built
                <span className="block text-zinc-500">
                  For Growth.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-zinc-400 leading-relaxed lg:text-right">
              A selection of campaigns and strategies focused on revenue,
              lead generation, audience growth and measurable business
              outcomes.
            </p>

          </div>
        </FadeUp>


        {/* Project Cards */}

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">

          {projects.map((project, index) => (

            <FadeUp key={project.number}>

              <article
                className={`
                  group
                  relative
                  min-h-[460px]
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.025]
                  backdrop-blur-xl
                  p-7
                  sm:p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  ${project.border}
                `}
              >

                {/* Gradient Glow */}

                <div
                  className={`
                    absolute
                    -top-24
                    -right-24
                    w-56
                    h-56
                    rounded-full
                    bg-gradient-to-br
                    ${project.gradient}
                    opacity-10
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:opacity-30
                    group-hover:scale-125
                  `}
                />


                {/* Top */}

                <div className="relative z-10 flex items-start justify-between">

                  <span className="text-5xl sm:text-6xl font-black text-white/[0.07] group-hover:text-white/[0.12] transition-colors">
                    {project.number}
                  </span>

                  <span
                    className={`
                      px-3
                      py-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-[10px]
                      uppercase
                      tracking-[2px]
                      font-semibold
                      ${project.accent}
                    `}
                  >
                    {project.tag}
                  </span>

                </div>


                {/* Main Content */}

                <div className="relative z-10 mt-auto">

                  {/* Result */}

                  <div className="mb-8">

                    <div className={`text-4xl sm:text-5xl font-black ${project.accent}`}>
                      {project.result}
                    </div>

                    <div className="text-xs uppercase tracking-[2px] text-zinc-500 mt-2">
                      {project.resultLabel}
                    </div>

                  </div>


                  {/* Title */}

                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>


                  {/* Description */}

                  <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-7">
                    {project.description}
                  </p>


                  {/* CTA */}

                  <button
                    className={`
                      mt-8
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-semibold
                      text-white
                      group/btn
                    `}
                  >
                    <span
                      className={`
                        flex
                        items-center
                        justify-center
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        transition-all
                        duration-300
                        group-hover:bg-white
                        group-hover:text-black
                      `}
                    >
                      →
                    </span>

                    <span className="transition-all duration-300 group-hover:translate-x-1">
                      Explore Case Study
                    </span>

                  </button>

                </div>


                {/* Bottom Accent Line */}

                <div
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gradient-to-r
                    ${project.gradient}
                    transition-all
                    duration-700
                    group-hover:w-full
                  `}
                />

              </article>

            </FadeUp>

          ))}

        </div>


        {/* Bottom Statement */}

        <FadeUp>
          <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            <p className="text-zinc-500 text-sm">
              Every project starts with strategy, testing and a clear growth objective.
            </p>

            <span className="text-xs uppercase tracking-[3px] text-zinc-600">
              More projects coming soon
            </span>

          </div>
        </FadeUp>

      </div>
    </section>
  );
}