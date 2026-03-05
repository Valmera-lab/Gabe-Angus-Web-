import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import QuoteCalculator from "@/components/QuoteCalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Stats />
      <Pricing />
      <QuoteCalculator />
      <Contact />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
