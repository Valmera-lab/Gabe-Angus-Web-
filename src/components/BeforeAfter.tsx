import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import valmeraBefore from "@/assets/valmera-before.png";
import valmeraAfter from "@/assets/valmera-after.png";

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
            {/* Before image */}
            <div className="absolute inset-0">
              <img src={valmeraBefore} alt="Before redesign — outdated Valmera website with poor layout" className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-[11px] md:text-[13px] text-red-400 tracking-[0.2em] uppercase font-bold font-body">✗ Before</span>
              </div>
            </div>

            {/* After image */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img src={valmeraAfter} alt="After redesign — modern Valmera website by Gabe Angus Web Design" className="w-full h-full object-cover object-top" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <span className="text-[11px] md:text-[13px] text-accent tracking-[0.2em] uppercase font-bold font-body">✓ After</span>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10 cursor-col-resize"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/40">
                <span className="text-background text-[12px] font-bold">⟨⟩</span>
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
              secure checkout, and a premium design that reflects their brand identity. The old site
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