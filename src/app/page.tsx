import ContactSection from "./components/ContactSection";
import Fotter from "./components/Fotter";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import OfferSection from "./components/OfferSection";
import ServiceSection from "./components/ServiceSection";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full">
        <OfferSection />
      </section>
      <section className="w-full">
        <ServiceSection />
      </section>
      <section className="w-full">
        <ContactSection />
      </section>
      <section className="w-full bg-black min-h-[160px]">
        <Fotter />
      </section>
    </main>
  );
}
