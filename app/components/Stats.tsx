"use client";

import CountUp from "react-countup";

export default function Stats() {
  return (
    <section className="section">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="glass p-8 rounded-3xl">
            <CountUp end={50} duration={3} />
            <p>Conversions</p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <CountUp end={100} duration={3} />
            <p>Leads</p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <CountUp end={3} duration={3} />
            <p>ROAS</p>
          </div>

          <div className="glass p-8 rounded-3xl">
            <CountUp end={100000} duration={3} />
            <p>Reach</p>
          </div>

        </div>

      </div>

    </section>
  );
}