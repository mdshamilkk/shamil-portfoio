export default function Footer() {
  return (
    <footer className="bg-[#03050B] border-t border-white/10 px-6 py-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">

          <h3 className="text-xl font-black tracking-tight">
            Shamil<span className="text-cyan-400">.</span>
          </h3>

          <p className="text-zinc-500 text-sm mt-2">
            Performance Marketing • Meta Ads • Ecommerce Growth
          </p>

        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-500">

          <a
            href="#about"
            className="hover:text-cyan-400 transition-colors"
          >
            About
          </a>

          <a
            href="#portfolio"
            className="hover:text-cyan-400 transition-colors"
          >
            Work
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>

        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Shamil Ahmad.
        </p>

      </div>

    </footer>
  );
}