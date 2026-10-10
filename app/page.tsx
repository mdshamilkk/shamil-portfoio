import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import Services from "./components/Services";
import Results from "./components/Results";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#050816] text-white">

      <div className="w-full max-w-[1440px] mx-auto">
<Navbar />
        <Hero />

        <TrustedBrands />

        <Services />

        <Results />

        <Portfolio />

        <Contact />

      </div>

      <Footer />

    </main>
  );
}