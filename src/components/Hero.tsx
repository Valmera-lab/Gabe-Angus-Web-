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

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-14 border border-border/50 bg-card/50 backdrop-blur-sm p-6 max-w-lg mx-auto"
          >
            <div className="flex items-center gap-1 justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-foreground font-body text-sm font-medium">5.0</span>
            </div>
            <p className="text-muted-foreground font-body text-[13px] leading-relaxed italic mb-3">
              "Gabe built our website and within a month we had double the enquiries. Game changer."
            </p>
            <p className="text-foreground/70 font-body text-[11px] tracking-[0.15em] uppercase">
              — James Cooper, Cooper & Sons Plumbing
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
