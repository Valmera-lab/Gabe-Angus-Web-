import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-16 pt-28 sm:pt-36 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 border border-accent/30 bg-accent/5 mb-8"
          >
            <span className="text-accent text-[12px] tracking-[0.2em] uppercase font-body font-medium">
              Trusted by 50+ UK businesses
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-[1.1] tracking-tight mb-6"
          >
            Websites That Bring More Customers to{" "}
            <span className="text-gradient">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body font-light leading-relaxed"
          >
            We build modern, mobile-friendly websites for tradespeople and small businesses 
            — designed to turn visitors into paying customers. Starting from{" "}
            <span className="text-accent font-medium">£500</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#quote"
              className="px-10 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/85 transition-all duration-300 text-center"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="px-10 py-4 border border-border text-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:border-accent/40 transition-all duration-300 text-center"
            >
              View Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-8 text-muted-foreground font-body text-[12px] tracking-wider"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Fast Turnaround
            </span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span>No Hidden Fees</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span>5★ Rated</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
