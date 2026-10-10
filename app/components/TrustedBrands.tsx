"use client";

export default function TrustedBrands() {
  const brands = [
    {
      logo: "/dex log.jpg",
      name: "Dexplora",
    },
    {
      logo: "/imresizer-HIVE LOGO.jpg",
      name: "Hive One",
    },
    {
      logo: "/vintlog.jpeg",
      name: "Vintar Solutions",
    },
    {
      logo: "/inami.jpg",
      name: "InAmigos Foundation",
    },
  ];

  return (
    <section className="py-24 overflow-hidden">
      {/* HEADING */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-cyan-400 uppercase tracking-[4px]">
            Trusted By
          </span>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Brands I've Helped Grow
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            Driving growth through Meta Ads, Ecommerce Strategy, SEO and
            Performance Marketing.
          </p>
        </div>
      </div>

      {/* MARQUEE */}

      <div className="overflow-hidden mt-20 w-full">
        <div className="flex w-max gap-8 animate-marquee">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="glass relative flex items-center justify-center min-w-[240px] h-[120px] rounded-3xl overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="relative z-10 max-h-12 max-w-[150px] object-contain opacity-80 hover:opacity-100 transition"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}