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
  <section id="about" className="py-32 px-6 md:px-12">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="text-primary text-xs font-body tracking-widest uppercase">Testimonials</span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mt-3 tracking-tight">
          Kind Words
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-500"
          >
            <div className="text-primary text-3xl mb-6 font-heading">"</div>
            <p className="text-foreground/80 font-body leading-relaxed mb-8">{t.quote}</p>
            <div>
              <p className="font-heading font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs font-body">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
