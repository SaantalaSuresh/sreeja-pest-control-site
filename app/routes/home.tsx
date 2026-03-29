import type { Route } from "./+types/home";
import Header from "../components/Header";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import AboutUs from "../components/AboutUs";
import Statistics from "../components/Statistics";
import HowItWorks from "../components/HowItWorks";
import ServicesGrid from "../components/ServicesGrid";
import ServiceAreas from "../components/ServiceAreas";
import WhyChooseUs from "../components/WhyChooseUs";
import Clients from "../components/Clients";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import PorousPip from "../components/PorousPip";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sreeja Pest Control | No.1 Pest Control Services in Tirupati, Andhra Pradesh" },
    { name: "description", content: "Professional, eco-friendly pest management solutions to protect your home and business from unwanted invaders." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PorousPip />
        <InfoBar />
        <AboutUs />
        <Statistics />
        <HowItWorks />
        <ServicesGrid />
        <WhyChooseUs />
        <ServiceAreas />
        {/* <Clients /> */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
