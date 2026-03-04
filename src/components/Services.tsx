import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Design",
    desc: "Custom designs that stand out from the crowd. Every pixel is purposeful, every interaction is intentional.",
  },
  {
    num: "02",
    title: "Development",
    desc: "Lightning-fast, responsive websites built with modern tech. Performance isn't optional—it's standard.",
  },
  {
    num: "03",
    title: "E-Commerce",
    desc: "Online stores that convert browsers into buyers. Seamless checkout, beautiful product displays.",
  },
  {
    num: "04",
    title: "SEO & Strategy",
    desc: "Get found. Get traffic. Get results. Data-driven strategies that put you on the map.",
  },
];

const Services = () => (
  <section id="services" className="py-32 px-6 md:px-12">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="text-primary text-xs font-body tracking-widest uppercase">What I Do</span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mt-3 tracking-tight">
          Services
        </h2>
      </motion.div>

      <div className="space-y-0">
        {services.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-10 border-b border-border hover:border-primary/40 transition-colors duration-500 cursor-default"
          >
            <span className="text-primary font-heading text-sm">{s.num}</span>
            <h3 className="text-2xl md:text-4xl font-heading font-semibold group-hover:text-primary transition-colors duration-300 md:w-72">
              {s.title}
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed flex-1">
              {s.desc}
            </p>
            <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300 text-xl hidden md:block">
              →
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
