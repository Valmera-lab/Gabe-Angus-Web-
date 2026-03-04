import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Work", "Services", "About", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
        gabe angus<span className="text-primary">.</span>
      </a>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body tracking-wide uppercase"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2.5 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-200"
        >
          Let's Talk
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <motion.span animate={open ? { rotate: 45, y: 6 } : {}} className="block w-6 h-0.5 bg-foreground" />
        <motion.span animate={open ? { opacity: 0 } : {}} className="block w-6 h-0.5 bg-foreground" />
        <motion.span animate={open ? { rotate: -45, y: -6 } : {}} className="block w-6 h-0.5 bg-foreground" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setOpen(false)}
                className="text-3xl font-heading font-bold text-foreground hover:text-primary transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
