"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const screenshots = [
  {
    image: "/results/shop.jpg",
    title: "Shopify Revenue Growth",
    description:
      "₹4.1L+ in sales generated through performance-driven Meta advertising.",
    metric: "₹4.1L+",
    label: "Sales Generated",
  },
  {
    image: "/results/dex1.jpg",
    title: "Meta Ads Performance",
    description:
      "Campaign optimization focused on improving conversions and return on ad spend.",
    metric: "2X",
    label: "Average ROAS",
  },
  {
    image: "/results/dex2.jpg",
    title: "Growth & Analytics",
    description:
      "Tracking traffic, conversions and user behaviour to make better marketing decisions.",
    metric: "100K+",
    label: "Reach Generated",
  },
  {
    image: "/results/dex3.jpg",
    title: "Campaign Performance",
    description:
      "Monitoring business performance and optimizing campaigns based on real data.",
    metric: "50+",
    label: "Conversions",
  },
];

export default function Results() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const currentItem = screenshots[current];

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#050816]">

      {/* BACKGROUND EFFECTS */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.06] blur-[160px] rounded-full pointer-events-none" />


      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

          <div>

            <div className="flex items-center gap-3 mb-5">

              <span className="w-10 h-px bg-cyan-400" />

              <p className="uppercase tracking-[4px] text-cyan-400 text-xs font-semibold">
                Performance Results
              </p>

            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">

              Real Work.

              <span className="block text-zinc-500">
                Real Results.
              </span>

            </h2>

          </div>


          <p className="text-zinc-400 max-w-md leading-relaxed lg:text-right">

            Every campaign is built around measurable performance,
            stronger conversions and strategies designed to create
            sustainable business growth.

          </p>

        </div>


        {/* ================= STATS ================= */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">

          <StatCard
            number="₹4.1L+"
            label="Sales Generated"
          />

          <StatCard
            number="2X"
            label="Average ROAS"
          />

          <StatCard
            number="100K+"
            label="Audience Reached"
          />

          <StatCard
            number="50+"
            label="Conversions"
          />

        </div>


        {/* ================= CASE STUDY SHOWCASE ================= */}

        <div className="relative">

          {/* TOP RESULT INFO */}

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">

            <div>

              <p className="text-xs uppercase tracking-[3px] text-cyan-400 mb-3">
                Featured Result
              </p>

              <h3 className="text-3xl md:text-5xl font-black">

                {currentItem.title}

              </h3>

              <p className="text-zinc-400 mt-4 max-w-2xl leading-relaxed">

                {currentItem.description}

              </p>

            </div>


            {/* RESULT METRIC */}

            <div className="border border-cyan-400/20 bg-cyan-400/[0.04] rounded-2xl px-6 py-5 min-w-[180px]">

              <div className="text-3xl font-black text-cyan-400">

                {currentItem.metric}

              </div>

              <div className="text-xs text-zinc-500 uppercase tracking-[2px] mt-2">

                {currentItem.label}

              </div>

            </div>

          </div>


          {/* IMAGE SLIDER */}

          <div className="relative group">

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">

              <Image
                key={currentItem.image}
                src={currentItem.image}
                alt={currentItem.title}
                width={1600}
                height={900}
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />


              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />


              {/* SLIDE NUMBER */}

              <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-sm">

                <span className="text-cyan-400 font-bold">

                  0{current + 1}

                </span>

                <span className="text-zinc-500">

                  {" "} / 0{screenshots.length}

                </span>

              </div>

            </div>


            {/* NAVIGATION BUTTONS */}

            <button
              onClick={prevSlide}
              aria-label="Previous result"
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center text-xl"
            >
              ←
            </button>


            <button
              onClick={nextSlide}
              aria-label="Next result"
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center justify-center text-xl"
            >
              →
            </button>

          </div>

        </div>


        {/* ================= DOT NAVIGATION ================= */}

        <div className="flex items-center justify-center gap-3 mt-10">

          {screenshots.map((item, index) => (

            <button
              key={item.title}
              onClick={() => setCurrent(index)}
              aria-label={`Go to ${item.title}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                current === index
                  ? "bg-cyan-400 w-12"
                  : "bg-white/15 hover:bg-white/30 w-3"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}


/* ================= STAT CARD ================= */

function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (

    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-6
        md:p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
      "
    >

      <div className="absolute -right-10 -top-10 w-24 h-24 bg-cyan-400/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

      <h3 className="relative text-3xl md:text-4xl font-black text-white">

        {number}

      </h3>

      <p className="relative text-zinc-500 text-sm mt-3">

        {label}

      </p>

    </div>

  );
}