import { motion } from "framer-motion";

const Contact = () => (
  <section id="contact" className="py-32 px-6 md:px-12 bg-secondary/20">
    <div className="container mx-auto max-w-4xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary text-xs font-body tracking-widest uppercase">Get In Touch</span>
        <h2 className="text-4xl md:text-7xl font-heading font-bold mt-3 tracking-tight mb-6">
          Let's build something<br />
          <span className="text-gradient">incredible</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life.
        </p>
        <a
          href="mailto:hello@gabeangus.com"
          className="inline-block px-10 py-5 bg-primary text-primary-foreground font-heading font-semibold rounded-full text-sm tracking-wide hover:scale-105 transition-all duration-300 glow"
        >
          hello@gabeangus.com
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
