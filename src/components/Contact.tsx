import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`New enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:gabe.angus.web@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast({ title: "Opening your email client…" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 md:py-40 px-6 md:px-16 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-6">Get in Touch</p>
          <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-4 leading-tight">
            Let's build your
            <br />
            <em className="text-gradient not-italic">next website</em>
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-md mx-auto leading-relaxed font-light">
            Ready to get more customers online? Fill out the form or drop us an email directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-2">
                Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-transparent border-border/60 focus:border-accent rounded-none px-4 py-5 font-body text-sm placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label className="block text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-2">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-transparent border-border/60 focus:border-accent rounded-none px-4 py-5 font-body text-sm placeholder:text-muted-foreground/40"
              />
            </div>
            <div>
              <label className="block text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-2">
                Message
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project…"
                rows={5}
                className="bg-transparent border-border/60 focus:border-accent rounded-none px-4 py-4 font-body text-sm placeholder:text-muted-foreground/40 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full px-10 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/80 transition-all duration-500 disabled:opacity-50"
            >
              {sending ? "Opening…" : "Send Message"}
            </button>
          </motion.form>

          {/* Direct Email */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center h-full space-y-8"
          >
            <div>
              <p className="text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-3">
                Or email us directly
              </p>
              <a
                href="mailto:gabe.angus.web@gmail.com"
                className="text-xl md:text-2xl font-heading font-medium text-foreground hover:text-accent transition-colors duration-300"
              >
                gabe.angus.web@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-3">
                Response time
              </p>
              <p className="text-foreground font-body text-base font-light">
                We'll get back to you within 24 hours.
              </p>
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-3">
                What happens next
              </p>
              <ul className="space-y-3 font-body text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">01</span>
                  <span>We review your project details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">02</span>
                  <span>Schedule a free discovery call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">03</span>
                  <span>Deliver a tailored proposal & quote</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
