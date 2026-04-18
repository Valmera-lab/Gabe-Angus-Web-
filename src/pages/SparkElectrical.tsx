import { useEffect } from "react";
import DemoSite from "@/components/DemoSite";
import heroImage from "@/assets/spark-hero.jpg";

const SparkElectrical = () => {
  useEffect(() => {
    document.title = "Spark Electrical Services — Demo Site";
  }, []);

  return (
    <DemoSite
      businessName="Spark Electrical Services"
      tagline="NICEIC approved electricians"
      heroHeadline="Bright ideas, safely wired."
      heroSubheadline="Domestic and commercial electrical work across the region — from rewires and EV chargers to smart lighting and fault finding. Friendly, certified, and fully insured."
      heroImage={heroImage}
      primaryHex="#D97706"
      primarySoftHex="#FFF7ED"
      phone="0117 000 000"
      email="hello@sparkelectricalservices.co.uk"
      area="Bristol & Bath"
      services={[
        { title: "Full & Partial Rewires", description: "Safe, modern wiring for older properties — minimal disruption and certified to the latest 18th edition standards." },
        { title: "EV Charger Installation", description: "OZEV-approved installers fitting home and workplace EV chargers from leading brands." },
        { title: "Smart Home & Lighting", description: "Design and install smart lighting, dimmers, and home automation that actually works the way you live." },
        { title: "Consumer Unit Upgrades", description: "Upgrade your fuse box to a modern RCD-protected consumer unit — usually completed in a single day." },
        { title: "Fault Finding & Repairs", description: "Tripping breakers, dead sockets, flickering lights — we diagnose and fix electrical faults fast." },
        { title: "EICR & Landlord Reports", description: "Electrical safety certificates for homeowners, landlords, and businesses — booked online in 60 seconds." },
      ]}
      whyUs={[
        "NICEIC Approved Contractor",
        "Online booking with same-week availability",
        "Up-front quotes — no hidden extras",
        "£5m public liability insurance",
        "6-year guarantee on all installations",
      ]}
      testimonials={[
        { quote: "Booked an EV charger online on Monday, fitted on Thursday. Couldn't be easier.", name: "Marcus L.", location: "Bristol" },
        { quote: "Did a full rewire on our Victorian terrace — clean, careful and explained everything.", name: "Hannah J.", location: "Bath" },
        { quote: "Found a fault three other electricians had missed. Brilliant problem solvers.", name: "Dev R.", location: "Keynsham" },
      ]}
    />
  );
};

export default SparkElectrical;
