import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, Check, Star } from "lucide-react";

export interface DemoService {
  title: string;
  description: string;
}

export interface DemoTestimonial {
  quote: string;
  name: string;
  location: string;
}

export interface DemoSiteProps {
  businessName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  primaryHex: string; // brand colour for the demo (CSS hex)
  primarySoftHex: string; // lighter background tint
  phone: string;
  email: string;
  area: string;
  services: DemoService[];
  whyUs: string[];
  testimonials: DemoTestimonial[];
}

const DemoSite = ({
  businessName,
  tagline,
  heroHeadline,
  heroSubheadline,
  heroImage,
  primaryHex,
  primarySoftHex,
  phone,
  email,
  area,
  services,
  whyUs,
  testimonials,
}: DemoSiteProps) => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-body">
      {/* Demo banner */}
      <div
        className="w-full text-center py-2 px-4 text-xs sm:text-sm"
        style={{ backgroundColor: "#0F172A", color: "#fff" }}
      >
        <Link to="/#portfolio" className="inline-flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-3.5 h-3.5" />
          This is a demo built by Gabe Angus Web Design — back to portfolio
        </Link>
      </div>

      {/* Nav */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="font-bold text-lg" style={{ color: primaryHex }}>
            {businessName}
          </span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#reviews" className="hover:text-slate-900">Reviews</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a
            href="#contact"
            className="text-white text-sm font-semibold px-4 py-2 rounded-md"
            style={{ backgroundColor: primaryHex }}
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={heroImage} alt={businessName} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.55) 60%, rgba(15,23,42,0.2) 100%)" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-white">
          <p className="uppercase tracking-[0.2em] text-xs mb-4" style={{ color: primarySoftHex }}>
            {tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl mb-5">
            {heroHeadline}
          </h1>
          <p className="text-lg text-slate-200 max-w-xl mb-8">{heroSubheadline}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-md font-semibold text-white"
              style={{ backgroundColor: primaryHex }}
            >
              Request a Free Quote
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="px-6 py-3 rounded-md font-semibold border border-white/30 text-white hover:bg-white/10"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-slate-700">
          <div className="flex items-center justify-center gap-2"><Check className="w-4 h-4" style={{ color: primaryHex }} /> Fully Insured</div>
          <div className="flex items-center justify-center gap-2"><Check className="w-4 h-4" style={{ color: primaryHex }} /> Free Quotes</div>
          <div className="flex items-center justify-center gap-2"><Check className="w-4 h-4" style={{ color: primaryHex }} /> 5★ Rated</div>
          <div className="flex items-center justify-center gap-2"><Check className="w-4 h-4" style={{ color: primaryHex }} /> Local Family Business</div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs tracking-[0.2em] mb-3" style={{ color: primaryHex }}>What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div
                  className="w-10 h-10 rounded flex items-center justify-center mb-4 text-white font-bold"
                  style={{ backgroundColor: primaryHex }}
                >
                  ✓
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="py-20 px-4 sm:px-6" style={{ backgroundColor: primarySoftHex }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.2em] mb-3" style={{ color: primaryHex }}>Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable. Local. Trusted.</h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              We've built our reputation on showing up on time, doing the job right, and treating
              every home like it's our own. Here's what you can expect:
            </p>
            <ul className="space-y-3">
              {whyUs.map((w) => (
                <li key={w} className="flex items-start gap-3 text-slate-800">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: primaryHex }} />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">5.0 Rating</p>
            <p className="text-slate-600 mb-6">From over 80 verified customers across {area}.</p>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 rounded-md font-semibold text-white"
              style={{ backgroundColor: primaryHex }}
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase text-xs tracking-[0.2em] mb-3" style={{ color: primaryHex }}>What Customers Say</p>
            <h2 className="text-3xl md:text-4xl font-bold">Real reviews from real customers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-slate-200 rounded-lg p-6 bg-white">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">"{t.quote}"</p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-4 sm:px-6 text-white" style={{ backgroundColor: "#0F172A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to book a job?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get in touch for a free, no-obligation quote. We usually reply the same day.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-white/20 hover:bg-white/5">
              <Phone className="w-4 h-4" /> {phone}
            </a>
            <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-white/20 hover:bg-white/5">
              <Mail className="w-4 h-4" /> Email
            </a>
            <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-white/20">
              <MapPin className="w-4 h-4" /> {area}
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-md font-semibold text-white"
            style={{ backgroundColor: primaryHex }}
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 text-center py-6 text-xs">
        <p>© {new Date().getFullYear()} {businessName}. Demo site built by{" "}
          <Link to="/" className="underline hover:text-white">Gabe Angus Web Design</Link>.
        </p>
      </footer>
    </div>
  );
};

export default DemoSite;
