import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-32 md:py-40 px-6 md:px-16 border-t border-border/50">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[13px] text-muted-foreground tracking-[0.3em] uppercase font-body mb-6">Get in Touch</p>
        <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-8 leading-tight">
          Let's build something
          <br />
          <em className="text-gradient not-italic">remarkable</em>
        </h2>
        <p className="text-muted-foreground font-body text-base max-w-md mx-auto mb-14 leading-relaxed font-light">
          Ready to elevate your digital presence? Let's start a conversation about your next project.
        </p>
        <a
          href="mailto:hello@gabeangus.com"
          className="inline-block px-10 py-4 bg-foreground text-background font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent transition-all duration-500"
        >
          hello@gabeangus.com
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
