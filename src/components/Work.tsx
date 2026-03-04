import { motion } from "framer-motion";

const projects = [
  { title: "Luxe Interiors", category: "E-Commerce", color: "from-primary/20 to-primary/5" },
  { title: "Volt Fitness", category: "Web Design", color: "from-accent/20 to-accent/5" },
  { title: "Noma Studio", category: "Branding", color: "from-primary/15 to-primary/5" },
  { title: "Apex Capital", category: "Development", color: "from-accent/15 to-accent/5" },
];

const Work = () => (
  <section id="work" className="py-32 px-6 md:px-12 bg-secondary/20">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="text-primary text-xs font-body tracking-widest uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mt-3 tracking-tight">
          Selected Work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 transition-all duration-500"
          >
            <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <div className="text-center p-8">
                <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mb-4">
                  {p.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-heading font-bold group-hover:text-primary transition-colors duration-300">
                  {p.title}
                </h3>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              ↗
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
