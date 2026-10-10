import FadeUp from "./FadeUp";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description:
        "I start by understanding your business, audience, offer, goals and the challenges currently limiting growth.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "A clear campaign and creative strategy is built around the strongest opportunities for growth.",
    },
    {
      number: "03",
      title: "Test",
      description:
        "Campaigns, audiences, creatives and messaging are tested to identify what drives the best response.",
    },
    {
      number: "04",
      title: "Optimize & Scale",
      description:
        "Performance data guides optimization, allowing successful campaigns to receive more focus and budget.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-28 lg:py-36 px-5 sm:px-6 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto">

        <FadeUp>
          <div className="max-w-3xl mb-16 sm:mb-20">

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-cyan-400" />

              <span className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold">
                How I Work
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95]">
              From Strategy
              <span className="block text-zinc-500">
                To Scalable Growth.
              </span>
            </h2>

          </div>
        </FadeUp>

        <div className="border-t border-white/10">

          {steps.map((step) => (
            <FadeUp key={step.number}>

              <div className="group grid md:grid-cols-[150px_1fr_1.5fr] gap-6 md:gap-10 py-10 sm:py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-3 sm:px-6">

                <div className="text-cyan-400 text-sm font-bold tracking-[3px]">
                  {step.number}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-zinc-400 leading-7 text-sm sm:text-base max-w-xl">
                  {step.description}
                </p>

              </div>

            </FadeUp>
          ))}

        </div>

      </div>
    </section>
  );
}