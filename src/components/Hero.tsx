import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-16 pt-32 pb-20">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-10"
          >
            Websites that work as hard as you do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-heading font-medium leading-[1.05] tracking-tight mb-10"
          >
            We build websites for
            <br />
            <em className="text-gradient not-italic">businesses that grow</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-xl mb-14 font-body leading-relaxed font-light"
          >
            From trades to ecommerce to business portfolios — we design and develop stunning websites
            that bring in customers and look incredible. Starting from just{" "}
            <span className="text-accent font-medium">£500</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#quote"
              className="group px-8 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/80 transition-all duration-500"
            >
              Get a Free Quote
            </a>
            <a
              href="#reviews"
              className="px-8 py-4 border border-border text-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:border-accent/40 transition-all duration-500"
            >
              See Reviews
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
