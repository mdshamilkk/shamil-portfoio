export default function Services() {
  const services = [
    {
      number: "01",
      title: "Meta Ads",
      description:
        "Performance-driven Meta ad campaigns focused on generating quality leads, conversions and measurable revenue growth.",
      tag: "Paid Growth",
    },
    {
      number: "02",
      title: "Shopify Growth",
      description:
        "Conversion-focused strategies to improve your store experience, product pages and turn more visitors into customers.",
      tag: "Ecommerce",
    },
    {
      number: "03",
      title: "SEO",
      description:
        "Strategic SEO built to improve visibility, attract relevant organic traffic and create sustainable long-term growth.",
      tag: "Organic Growth",
    },
    {
      number: "04",
      title: "Social Media",
      description:
        "Content and social media strategies designed to strengthen your brand presence and build meaningful audience engagement.",
      tag: "Brand Growth",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-cyan-400" />

              <span className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold">
                What I Do
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Services That Drive
              <span className="block text-zinc-500">Real Growth.</span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 leading-relaxed lg:text-right">
            From paid advertising to ecommerce growth, I focus on strategies
            that are built around clear goals, strong execution and measurable
            business results.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="
                group
                relative
                min-h-[340px]
                p-7
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:bg-white/[0.06]
              "
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Number + Tag */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-black text-white/15 group-hover:text-cyan-400/30 transition-colors duration-500">
                    {service.number}
                  </span>

                  <span className="text-[10px] uppercase tracking-[2px] text-zinc-500 border border-white/10 rounded-full px-3 py-1.5">
                    {service.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-7 flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    <span>Explore Service</span>

                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs uppercase tracking-[2px] text-zinc-500">
          <span>Strategy • Execution • Optimization</span>
          <span>Focused on measurable outcomes</span>
        </div>
      </div>
    </section>
  );
}