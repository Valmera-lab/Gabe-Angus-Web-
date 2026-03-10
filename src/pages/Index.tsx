import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import QuoteCalculator from "@/components/QuoteCalculator";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Benefits />
        <Pricing />
        <QuoteCalculator />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
