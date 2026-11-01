import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyNexgen from "./components/WhyNexgen";
import WorkGallery from "./components/WorkGallery";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  return (
    <div className="min-h-screen bg-carbon font-body text-bone antialiased">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyNexgen />
        <WorkGallery />
        <Experience />
        <Testimonials />
        <Packages />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <WelcomeModal />
    </div>
  );
}
