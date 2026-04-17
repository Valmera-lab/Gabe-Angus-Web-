import { motion } from "framer-motion";
import { Check, Info, Star, Sparkles } from "lucide-react";

const Pricing = () => (
  <section id="pricing" className="py-20 sm:py-32 md:py-40 px-4 sm:px-6 md:px-16 border-t border-border/50">
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
          Simple monthly pricing
        </h2>
        <p className="text-muted-foreground font-body text-base mt-4 font-light">
          No upfront build fee. Start for £20 your first month.
        </p>
      </motion.div>

      {/* Main Package */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mb-6"
      >
        <div className="p-6 sm:p-10 md:p-14 border border-accent/30 bg-card relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Left: Pricing */}
            <div>
              <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-6">Website Package</p>
              
              {/* Intro offer */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 border border-accent/20 mb-5">
                <Sparkles className="w-3 h-3 text-accent" />
                <span className="text-[10px] text-accent tracking-[0.2em] uppercase font-body font-medium">First month £20</span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl md:text-6xl font-heading font-medium">£199</span>
                <span className="text-muted-foreground font-body text-sm">/month</span>
              </div>
              <p className="text-muted-foreground font-body text-[12px] mb-6 font-light">
                12-month minimum · Cancel anytime after
              </p>

              <div className="p-4 bg-secondary/50 border border-border/50 mb-8">
                <p className="text-foreground/90 font-body text-sm font-medium mb-1">No upfront build fee</p>
                <p className="text-muted-foreground font-body text-[12px] leading-relaxed font-light">
                  Design, build, and launch are all included in your monthly subscription.
                </p>
              </div>

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
                "Full website design & build",
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

      {/* New Business / Ecommerce Discount */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-4xl mb-6"
      >
        <div className="p-6 sm:p-10 border border-accent/40 bg-gradient-to-br from-accent/[0.08] to-card relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-12 h-12 items-center justify-center bg-accent/15 border border-accent/30 shrink-0">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-3">Launch Offer</p>
              <h3 className="text-2xl md:text-3xl font-heading font-medium mb-3 leading-tight">
                No website yet? Get <span className="text-accent">10% off</span> for your first 12 months
              </h3>
              <p className="text-muted-foreground font-body text-sm font-light leading-relaxed mb-4">
                Perfect for new businesses and small ecommerce brands launching online for the first time.
                Pay just <span className="text-foreground/90 font-medium">£20 your first month</span>, then{" "}
                <span className="text-foreground/90 font-medium">£179/month</span> for the next 11 months.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-body">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-foreground/80">First month £20</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-foreground/80">10% off for 12 months</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-foreground/80">Save £220 in year one</span>
                </div>
              </div>
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
        <div className="p-6 sm:p-10 md:p-14 border border-accent/20 bg-gradient-to-br from-card to-accent/[0.03] relative overflow-hidden">
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
