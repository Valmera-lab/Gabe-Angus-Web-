import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Quote", href: "#quote" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 py-4 sm:py-6 bg-background/60 backdrop-blur-2xl border-b border-border/50"
    >
      <a href="#" className="font-heading text-lg tracking-wide text-foreground">
        Gabe Angus
      </a>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-500 font-body tracking-[0.15em] uppercase"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#quote"
          className="ml-4 px-6 py-2.5 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.1em] uppercase hover:bg-accent/80 transition-all duration-500"
        >
          Get a Quote
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <motion.span animate={open ? { rotate: 45, y: 6 } : {}} className="block w-6 h-px bg-foreground" />
        <motion.span animate={open ? { opacity: 0 } : {}} className="block w-6 h-px bg-foreground" />
        <motion.span animate={open ? { rotate: -45, y: -6 } : {}} className="block w-6 h-px bg-foreground" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-background"
            style={{ backgroundColor: "hsl(var(--background))" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setOpen(false)}
                className="text-3xl font-heading text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setOpen(false)}
              className="text-2xl font-heading text-accent"
            >
              Get a Quote
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
