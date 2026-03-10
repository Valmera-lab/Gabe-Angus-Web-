import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolioValmera from "@/assets/portfolio-valmera.jpg";
import portfolioPlumbing from "@/assets/portfolio-plumbing.jpg";
import portfolioElectrical from "@/assets/portfolio-electrical.jpg";

const projects = [
  {
    title: "Valmera Accessories",
    type: "E-Commerce Store",
    description: "Custom online store with product catalogues and secure checkout.",
    image: portfolioValmera,
    url: "https://valmeraaccessories.com",
    result: "£3k revenue in first month",
  },
  {
    title: "Cooper & Sons Plumbing",
    type: "Trade Business Website",
    description: "Lead-generating website with online booking and service pages.",
    image: portfolioPlumbing,
    url: null,
    result: "2x enquiries in 4 weeks",
  },
  {
    title: "Spark Electrical Services",
    type: "Service Business Website",
    description: "Professional site with service booking and customer testimonials.",
    image: portfolioElectrical,
    url: null,
    result: "Online bookings up 180%",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 md:px-16 border-t border-border/50">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Our Work</p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight">
          Websites that deliver results
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group border border-border/50 bg-card hover:border-accent/20 transition-all duration-500 overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} website`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <p className="text-[11px] text-accent tracking-[0.2em] uppercase font-body mb-2">{project.type}</p>
              <h3 className="text-lg font-heading font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground font-body text-sm font-light mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent text-[11px] font-body tracking-wider uppercase">
                  {project.result}
                </span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/70 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
