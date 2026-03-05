import { motion } from "framer-motion";
import { Wrench, ShoppingCart, Globe, Paintbrush, Search } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Wrench,
    title: "Trades Websites",
    desc: "Websites for plumbers, electricians, builders, and tradespeople. Online booking, service pages, and local SEO to generate leads 24/7.",
  },
  {
    num: "02",
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Beautiful online stores that convert. From product pages to secure checkout flows, we build shops that sell.",
  },
  {
    num: "03",
    icon: Globe,
    title: "Business Websites",
    desc: "Any business, any industry. Clean, fast, mobile-friendly websites tailored to your brand and your customers.",
  },
  {
    num: "04",
    icon: Paintbrush,
    title: "Portfolios",
    desc: "Stunning portfolio sites for creatives, freelancers, and professionals. Showcase your work beautifully and win more clients.",
  },
  {
    num: "05",
    icon: Search,
    title: "SEO & Maintenance",
    desc: "Ongoing hosting, updates, and SEO included for £20/month. Your site stays fast, secure, and ranking.",
  },
];

const Services = () => (
  <section id="services" className="py-32 md:py-40 px-6 md:px-16">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24 max-w-xl"
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          Websites built for
          <br />
          <em className="text-gradient not-italic">your industry</em>
        </h2>
      </motion.div>

      <div>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid grid-cols-1 md:grid-cols-[60px_40px_1fr_1fr_40px] gap-4 md:gap-8 items-center py-10 border-b border-border/60 hover:border-accent/30 transition-all duration-700"
            >
              <span className="text-accent/60 font-body text-[13px] tracking-wider">{s.num}</span>
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-500 hidden md:block" />
              <h3 className="text-xl md:text-2xl font-heading font-medium group-hover:text-accent transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed font-light">
                {s.desc}
              </p>
              <span className="text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-1 transition-all duration-500 hidden md:block">
                →
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
