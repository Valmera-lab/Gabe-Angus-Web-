import { motion } from "framer-motion";

const FinalCTA = () => (
  <section className="py-20 sm:py-28 px-4 sm:px-6 md:px-16 border-t border-border/50">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Ready to Grow?</p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-6">
          Let's build a website that works for your business
        </h2>
        <p className="text-muted-foreground font-body text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Get a free, no-obligation quote in under 2 minutes. We'll design a website 
          that brings in more customers — guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#quote"
            className="px-10 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/85 transition-all duration-300"
          >
            Get Your Free Quote
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border border-border text-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:border-accent/40 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
