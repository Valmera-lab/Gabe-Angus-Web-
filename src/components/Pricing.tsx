import { motion } from "framer-motion";
import { Check, Info, Star } from "lucide-react";

const Pricing = () => (
  <section id="pricing" className="py-32 md:py-40 px-6 md:px-16 border-t border-border/50">
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 max-w-xl"
      >
        <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
          Simple, honest pricing
        </h2>
      </motion.div>

      {/* Main Package */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mb-6"
      >
        <div className="p-10 md:p-14 border border-accent/30 bg-card relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Pricing */}
            <div>
              <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-6">Website Package</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl md:text-6xl font-heading font-medium">£500</span>
                <span className="text-muted-foreground font-body text-sm">one-time build</span>
              </div>
              <p className="text-muted-foreground font-body text-sm mb-6 font-light">
                Professional website design & development
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-heading font-medium text-accent">£199</span>
                <span className="text-muted-foreground font-body text-sm">/month</span>
              </div>
              <p className="text-muted-foreground font-body text-[12px] mb-8 font-light">
                12-month minimum · Cancel anytime after
              </p>
              <a
                href="#quote"
                className="inline-block px-8 py-4 bg-accent text-accent-foreground font-body text-[13px] tracking-[0.15em] uppercase hover:bg-accent/80 transition-all duration-500"
              >
                Get Started
              </a>
            </div>

            {/* Right: Features */}
            <div className="space-y-4">
              <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-4">Everything included</p>
              {[
                "Fast, secure hosting",
                "Website maintenance & updates",
                "Security updates & monitoring",
                "Unlimited small edits",
                "Speed & customer optimisation",
                "Basic SEO included",
                "Technical support",
                "Uptime monitoring 24/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-foreground/80 font-body text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* SEO Add-on */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl"
      >
        <div className="p-10 md:p-14 border border-accent/20 bg-gradient-to-br from-card to-accent/[0.03] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
          
          {/* Popular badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20">
            <Star className="w-3 h-3 text-accent fill-accent" />
            <span className="text-[10px] text-accent tracking-[0.2em] uppercase font-body font-medium">Most Popular</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Pricing */}
            <div>
              <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-2">Recommended Add-on</p>
              <p className="text-accent/70 font-body text-[11px] tracking-wide mb-6">Most clients add this</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl md:text-6xl font-heading font-medium">+£100</span>
                <span className="text-muted-foreground font-body text-sm">/month</span>
              </div>
              <p className="text-muted-foreground font-body text-[12px] mb-6 font-light">
                On top of your £199/month · £299/month total
              </p>
              <p className="text-muted-foreground font-body text-sm font-light leading-relaxed">
                Dominate Google and get found by customers actively searching for your services.
                <span className="text-foreground/90"> The difference between being on page 1 and being invisible.</span>
              </p>
            </div>

            {/* Right: Features */}
            <div className="space-y-4">
              <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase font-body mb-4">Full SEO service</p>
              {[
                "Advanced keyword research",
                "On-page SEO optimisation",
                "Google Business Profile setup",
                "Monthly performance reports",
                "Competitor analysis",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-foreground/80 font-body text-sm font-light">{item}</span>
                </div>
              ))}
              <div className="mt-6 p-4 bg-secondary/50 border border-border/50 flex gap-3">
                <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-muted-foreground font-body text-[12px] leading-relaxed">
                  Basic SEO is already included in £199/month. This upgrades you to full-service SEO that gets real results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Pricing;
