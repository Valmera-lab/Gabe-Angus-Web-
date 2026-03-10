import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Loading Websites",
    description:
      "Speed matters. Our websites load in under 2 seconds, keeping visitors engaged and improving your Google ranking.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly Design",
    description:
      "Over 70% of your customers browse on their phone. Every website we build looks and works perfectly on all devices.",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    description:
      "Strategic layouts, clear calls-to-action, and trust signals designed to turn website visitors into paying customers.",
  },
];

const Benefits = () => (
  <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-16 bg-secondary/30">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Why Choose Us</p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">
          Websites built for performance
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-8 border border-border/50 bg-card hover:border-accent/20 transition-all duration-500"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 border border-accent/20 bg-accent/5 mb-6">
              <b.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-heading font-medium mb-3">{b.title}</h3>
            <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">
              {b.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
