import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Gabe completely transformed our online presence. The site he built us has tripled our leads in just two months.",
    name: "Sarah Mitchell",
    role: "CEO, Luxe Interiors",
  },
  {
    quote: "Working with Gabe was seamless. He understood our vision instantly and delivered beyond expectations.",
    name: "Marcus Chen",
    role: "Founder, Volt Fitness",
  },
  {
    quote: "The best investment we've made. Our website finally looks as premium as the service we provide.",
    name: "Emily Rivera",
    role: "Director, Apex Capital",
  },
];

const Testimonials = () => (
  <section id="about" className="py-32 md:py-40 px-6 md:px-16">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24 max-w-xl"
      >
        <p className="text-[13px] text-muted-foreground tracking-[0.3em] uppercase font-body mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          Client words
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-8 md:p-10 bg-background"
          >
            <p className="text-foreground/70 font-body text-sm leading-[1.8] font-light mb-10 italic">
              "{t.quote}"
            </p>
            <div>
              <p className="font-body font-medium text-sm tracking-wide">{t.name}</p>
              <p className="text-muted-foreground text-[12px] font-body tracking-wider mt-1">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
