import { useEffect } from "react";
import DemoSite from "@/components/DemoSite";
import heroImage from "@/assets/cooper-hero.jpg";

const CooperPlumbing = () => {
  useEffect(() => {
    document.title = "Cooper & Sons Plumbing — Demo Site";
  }, []);

  return (
    <DemoSite
      businessName="Cooper & Sons Plumbing"
      tagline="Family-run plumbers since 1998"
      heroHeadline="Trusted plumbers across the South West"
      heroSubheadline="Boilers, leaks, bathrooms and emergency callouts — handled by a team you can rely on. Free quotes, fixed prices, no mess left behind."
      heroImage={heroImage}
      primaryHex="#1E40AF"
      primarySoftHex="#EFF4FB"
      phone="01392 000 000"
      email="hello@cooperandsonsplumbing.co.uk"
      area="Devon & Somerset"
      services={[
        { title: "Boiler Installation & Repair", description: "Gas Safe registered engineers fitting and servicing all major boiler brands with up to 10-year warranties." },
        { title: "Bathroom Fitting", description: "Full bathroom design and installation — from tiling to fixtures — completed on time and on budget." },
        { title: "Emergency Callouts", description: "24/7 response for leaks, burst pipes, and no-heating emergencies. We aim to reach you within an hour." },
        { title: "Leak Detection", description: "Non-destructive leak tracing using thermal imaging to find and fix the issue without tearing up walls." },
        { title: "Drainage & Unblocking", description: "Fast clearance of blocked sinks, toilets, drains and outside gullies — fixed price, no surprises." },
        { title: "Annual Servicing", description: "Keep your boiler safe and efficient with our yearly service plan from just £89." },
      ]}
      whyUs={[
        "Gas Safe registered (Reg. 000000)",
        "Same-day appointments available",
        "Fixed-price quotes — no hourly surprises",
        "Fully insured & DBS checked engineers",
        "12-month workmanship guarantee",
      ]}
      testimonials={[
        { quote: "Boiler died on a Sunday and they had us back up and running by Monday lunchtime. Brilliant service.", name: "Sarah M.", location: "Exeter" },
        { quote: "Refit our entire bathroom in 5 days. Tidy, polite and the finish is spotless.", name: "James T.", location: "Taunton" },
        { quote: "Honest pricing and they actually turn up when they say they will. Rare these days.", name: "Linda P.", location: "Tiverton" },
      ]}
    />
  );
};

export default CooperPlumbing;
