import { motion } from "framer-motion";

const projects = [
  { title: "Luxe Interiors", category: "E-Commerce" },
  { title: "Volt Fitness", category: "Web Design" },
  { title: "Noma Studio", category: "Branding" },
  { title: "Apex Capital", category: "Development" },
];

const Work = () => (
  <section id="work" className="py-32 md:py-40 px-6 md:px-16">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-24 max-w-xl"
      >
        <p className="text-[13px] text-muted-foreground tracking-[0.3em] uppercase font-body mb-4">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          Selected work
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group relative cursor-pointer"
          >
            <div className="aspect-[4/3] bg-card border border-border/50 group-hover:border-accent/20 transition-all duration-700 flex items-end p-8">
              <div>
                <p className="text-[11px] text-muted-foreground font-body uppercase tracking-[0.3em] mb-2">
                  {p.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-heading font-medium group-hover:text-accent transition-colors duration-500">
                  {p.title}
                </h3>
              </div>
              <div className="ml-auto self-end w-8 h-8 border border-border/50 flex items-center justify-center text-muted-foreground/40 group-hover:border-accent group-hover:text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-xs">
                ↗
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
