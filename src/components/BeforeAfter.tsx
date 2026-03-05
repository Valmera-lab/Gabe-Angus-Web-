import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="showcase" className="py-32 md:py-40 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-xl"
        >
          <p className="text-[13px] text-accent tracking-[0.3em] uppercase font-body mb-4">
            Showcase
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-medium tracking-tight leading-tight">
            Before &amp; After
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Slider */}
          <div className="relative aspect-[4/3] overflow-hidden border border-border/50 bg-card select-none">
            {/* Before (old/placeholder) */}
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <div className="text-center p-8">
                <p className="text-[11px] text-muted-foreground/60 tracking-[0.3em] uppercase font-body mb-4">Before</p>
                <div className="space-y-3 max-w-[280px] mx-auto">
                  <div className="h-6 bg-muted-foreground/10 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-muted-foreground/8 rounded w-full" />
                  <div className="h-3 bg-muted-foreground/8 rounded w-5/6" />
                  <div className="h-3 bg-muted-foreground/8 rounded w-2/3" />
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <div className="h-16 bg-muted-foreground/6 rounded" />
                    <div className="h-16 bg-muted-foreground/6 rounded" />
                  </div>
                  <div className="h-8 bg-muted-foreground/10 rounded w-1/2 mx-auto mt-4" />
                </div>
                <p className="text-muted-foreground/40 font-body text-[11px] mt-6 tracking-wider">
                  Outdated • Slow • No conversions
                </p>
              </div>
            </div>

            {/* After (new site) */}
            <div
              className="absolute inset-0 flex items-center justify-center bg-card overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="text-center p-8 w-full">
                <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-4">After</p>
                <div className="space-y-3 max-w-[280px] mx-auto">
                  <div className="h-6 bg-accent/20 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-accent/10 rounded w-full" />
                  <div className="h-3 bg-accent/10 rounded w-5/6" />
                  <div className="h-3 bg-accent/10 rounded w-2/3" />
                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <div className="h-16 bg-accent/8 rounded border border-accent/20" />
                    <div className="h-16 bg-accent/8 rounded border border-accent/20" />
                  </div>
                  <div className="h-8 bg-accent rounded w-1/2 mx-auto mt-4" />
                </div>
                <p className="text-accent/60 font-body text-[11px] mt-6 tracking-wider">
                  Modern • Fast • Converting
                </p>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-accent z-10 cursor-col-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent flex items-center justify-center shadow-lg">
                <span className="text-accent-foreground text-[10px] font-body font-bold">⟨⟩</span>
              </div>
            </div>

            {/* Invisible slider input */}
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <p className="text-[11px] text-accent tracking-[0.3em] uppercase font-body mb-3">
              Featured Project
            </p>
            <h3 className="text-3xl md:text-4xl font-heading font-medium mb-3">
              Valmera Accessories
            </h3>
            <p className="text-muted-foreground font-body text-[13px] tracking-wider uppercase mb-6">
              E-Commerce Store
            </p>
            <p className="text-muted-foreground font-body text-sm leading-[1.9] font-light mb-8 max-w-md">
              A fully custom ecommerce store built for Valmera Accessories — featuring product catalogues,
              secure checkout, and a premium dark design that reflects their brand identity. The old site
              was outdated, slow, and wasn't converting. We rebuilt everything from scratch.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["E-Commerce", "Custom Design", "SEO", "Mobile-First"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent text-[11px] font-body tracking-wider uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://valmeraaccessories.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-accent font-body text-[13px] tracking-[0.1em] uppercase hover:gap-4 transition-all duration-500"
            >
              View Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
