import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

const reviews = [
  {
    quote: "Gabe built our plumbing website and within a month we had double the enquiries. Absolute game changer for our business.",
    name: "James Cooper",
    role: "Cooper & Sons Plumbing",
    stars: 5,
    result: "2x enquiries in 4 weeks",
  },
  {
    quote: "Professional, fast, and the site looks incredible. Our customers constantly compliment how easy it is to book us online.",
    name: "Sarah Mitchell",
    role: "Spark Electrical Services",
    stars: 5,
    result: "Online bookings up 180%",
  },
  {
    quote: "We went from no online presence to a fully functioning ecommerce store. Sales started coming in the first week.",
    name: "Marcus Chen",
    role: "Founder, Valmera Accessories",
    stars: 5,
    result: "£3k revenue in first month",
  },
  {
    quote: "The £20 a month hosting is unbeatable. Gabe handles everything — updates, speed, security. I just focus on my business.",
    name: "Lisa Hartley",
    role: "Hartley Home Electrics",
    stars: 5,
    result: "Zero downtime in 12 months",
  },
  {
    quote: "Best money I've ever spent. The website pays for itself every single week with new leads coming through.",
    name: "Tom Bradford",
    role: "Bradford Plumbing & Heating",
    stars: 5,
    result: "15+ leads per week",
  },
  {
    quote: "Gabe redesigned our outdated site and it's like night and day. We look like a premium brand now.",
    name: "Emily Rivera",
    role: "Rivera Interiors",
    stars: 5,
    result: "3x average project value",
  },
];

const Work = () => (
  <section id="reviews" className="py-32 md:py-40 px-6 md:px-16">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24 max-w-xl"
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Reviews</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          What our clients say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 bg-card border border-border/50 hover:border-accent/20 transition-all duration-700"
          >
            <Quote className="w-6 h-6 text-accent/20 mb-5" />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/80 font-body text-sm leading-[1.8] font-light mb-6">
              "{r.quote}"
            </p>
            <div className="mb-4">
              <p className="font-body font-medium text-sm tracking-wide">{r.name}</p>
              <p className="text-muted-foreground text-[12px] font-body tracking-wider mt-1">{r.role}</p>
            </div>
            <div className="inline-block px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent text-[11px] font-body tracking-wider uppercase">
              {r.result}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Portfolio Piece */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 border border-border/50 hover:border-accent/20 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-video bg-card flex items-center justify-center border-b md:border-b-0 md:border-r border-border/50">
            <div className="text-center p-10">
              <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-3">Featured Project</p>
              <h3 className="text-3xl md:text-4xl font-heading font-medium mb-2">Valmera Accessories</h3>
              <p className="text-muted-foreground font-body text-sm">E-Commerce Store</p>
            </div>
          </div>
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <p className="text-muted-foreground font-body text-sm leading-[1.9] font-light mb-8">
              A fully custom ecommerce store built for Valmera Accessories — featuring product catalogues,
              secure checkout, and a design that reflects their premium brand identity.
            </p>
            <a
              href="https://valmeraaccessories.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-accent font-body text-[13px] tracking-[0.1em] uppercase hover:gap-4 transition-all duration-500"
            >
              View Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Work;
