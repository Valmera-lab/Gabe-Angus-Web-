import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Design",
    desc: "Bespoke designs crafted with intention. Every element serves a purpose, every interaction feels considered.",
  },
  {
    num: "02",
    title: "Development",
    desc: "Lightning-fast, responsive builds using modern frameworks. Performance and quality are non-negotiable.",
  },
  {
    num: "03",
    title: "E-Commerce",
    desc: "Online stores engineered to convert. From seamless checkout flows to beautiful product experiences.",
  },
  {
    num: "04",
    title: "Brand Strategy",
    desc: "Positioning that resonates. We help define your digital identity and craft a narrative that sticks.",
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
        <p className="text-[13px] text-muted-foreground tracking-[0.3em] uppercase font-body mb-4">Services</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          What we bring to the table
        </h2>
      </motion.div>

      <div>
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[60px_1fr_1fr_40px] gap-4 md:gap-8 items-baseline py-10 border-b border-border/60 hover:border-accent/30 transition-all duration-700"
          >
            <span className="text-accent/60 font-body text-[13px] tracking-wider">{s.num}</span>
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
        ))}
      </div>
    </div>
  </section>
);

export default Services;
