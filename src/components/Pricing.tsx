import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Monthly Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 border border-accent/30 bg-card relative"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-6">Website Package</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl md:text-6xl font-heading font-medium">£500</span>
            <span className="text-muted-foreground font-body text-sm">one-time build</span>
          </div>
          <p className="text-muted-foreground font-body text-sm mb-2 font-light">
            Professional website design & development, then £199/month for everything you need to grow online.
          </p>
          <div className="flex items-baseline gap-2 mb-8">
            <span className="text-2xl font-heading font-medium text-accent">+ £199</span>
            <span className="text-muted-foreground font-body text-sm">/month (12-month minimum)</span>
          </div>
          <div className="space-y-4">
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

          <div className="mt-8 p-4 bg-secondary/50 border border-border/50 flex gap-3">
            <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-muted-foreground font-body text-[12px] leading-relaxed">
              12-month minimum commitment. Cancel anytime after your first year.
            </p>
          </div>
        </motion.div>

        {/* SEO Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-10 border border-border/50 bg-card"
        >
          <p className="text-[11px] text-muted-foreground tracking-[0.3em] uppercase font-body mb-6">Add-on</p>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl md:text-6xl font-heading font-medium">£50</span>
            <span className="text-muted-foreground font-body text-sm">/month</span>
          </div>
          <p className="text-muted-foreground font-body text-sm mb-8 font-light">
            Want to dominate search results? Add full SEO optimisation to your monthly plan for maximum visibility.
          </p>
          <div className="space-y-4">
            {[
              "Advanced keyword research",
              "On-page SEO optimisation",
              "Google Business Profile setup",
              "Monthly performance reports",
              "Competitor analysis",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="w-4 h-4 text-muted-foreground shrink-0" />
                <span className="text-foreground/80 font-body text-sm font-light">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-secondary/50 border border-border/50 flex gap-3">
            <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-muted-foreground font-body text-[12px] leading-relaxed">
              Basic SEO is already included in your £199/month plan. This add-on is for businesses wanting advanced, full-service SEO.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Pricing;
