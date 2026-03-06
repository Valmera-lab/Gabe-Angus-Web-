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
            {/* Before — ugly old website mockup */}
            <div className="absolute inset-0 bg-[#f0f0f0] overflow-hidden">
              <div className="w-full">
                {/* Ugly nav */}
                <div className="bg-[#003399] px-3 py-2 flex items-center gap-2">
                  <div className="text-[#ffff00] font-bold text-[11px] md:text-[13px]" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    ★ VALMERA ACCESSORIES ★
                  </div>
                  <div className="ml-auto flex gap-2">
                    <span className="text-[#00ff00] text-[8px] md:text-[10px] underline" style={{ fontFamily: 'Times New Roman, serif' }}>HOME</span>
                    <span className="text-[#00ff00] text-[8px] md:text-[10px] underline" style={{ fontFamily: 'Times New Roman, serif' }}>SHOP</span>
                    <span className="text-[#00ff00] text-[8px] md:text-[10px] underline" style={{ fontFamily: 'Times New Roman, serif' }}>ABOUT</span>
                  </div>
                </div>
                {/* Ugly banner */}
                <div className="bg-[#ff0000] text-[#ffff00] text-center py-1 text-[8px] md:text-[10px] font-bold animate-pulse" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  🔥🔥 SALE NOW ON!!! CLICK HERE!!! 🔥🔥
                </div>
                {/* Ugly content */}
                <div className="p-3 space-y-2">
                  <div className="bg-[#cccccc] border-2 border-[#999] p-2">
                    <p className="text-[#000080] text-[9px] md:text-[11px] font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>Welcome to our website!!!</p>
                    <p className="text-[#333] text-[7px] md:text-[9px]" style={{ fontFamily: 'Arial, sans-serif' }}>We sell the best accessories. Please browse our site and buy stuff. Thanks for visiting!!!</p>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="bg-[#ddd] border border-[#999] p-1 text-center">
                      <div className="w-full aspect-square bg-[#bbb] flex items-center justify-center text-[7px] text-[#666]">NO IMG</div>
                      <p className="text-[6px] md:text-[8px] text-[#000080] font-bold mt-1">Product 1</p>
                      <p className="text-[#ff0000] text-[7px] md:text-[9px] font-bold">£9.99</p>
                    </div>
                    <div className="bg-[#ddd] border border-[#999] p-1 text-center">
                      <div className="w-full aspect-square bg-[#bbb] flex items-center justify-center text-[7px] text-[#666]">NO IMG</div>
                      <p className="text-[6px] md:text-[8px] text-[#000080] font-bold mt-1">Product 2</p>
                      <p className="text-[#ff0000] text-[7px] md:text-[9px] font-bold">£14.99</p>
                    </div>
                    <div className="bg-[#ddd] border border-[#999] p-1 text-center">
                      <div className="w-full aspect-square bg-[#bbb] flex items-center justify-center text-[7px] text-[#666]">NO IMG</div>
                      <p className="text-[6px] md:text-[8px] text-[#000080] font-bold mt-1">Product 3</p>
                      <p className="text-[#ff0000] text-[7px] md:text-[9px] font-bold">£19.99</p>
                    </div>
                  </div>
                  <div className="bg-[#ffff00] border-2 border-[#ff0000] p-1 text-center">
                    <p className="text-[#ff0000] text-[7px] md:text-[9px] font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                      ⚠️ Site best viewed in Internet Explorer ⚠️
                    </p>
                  </div>
                  <div className="text-center">
                    <img src="https://web.archive.org/web/2009/http://www.geocities.com/SiliconValley/Haven/1839/counter.gif" alt="" className="inline h-3 opacity-50" />
                    <p className="text-[6px] text-[#999]">Visitor counter: 000042</p>
                  </div>
                </div>
              </div>
              <p className="absolute bottom-2 left-3 text-[9px] md:text-[11px] text-[#999] tracking-[0.2em] uppercase font-bold">Before</p>
            </div>

            {/* After — sleek dark modern site */}
            <div
              className="absolute inset-0 bg-[#0a0a0a] overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="w-full">
                {/* Modern nav */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-white/10">
                  <span className="text-white text-[11px] md:text-[13px] tracking-[0.2em] uppercase font-light">Valmera</span>
                  <div className="flex gap-4">
                    <span className="text-white/50 text-[8px] md:text-[10px] tracking-[0.15em] uppercase">Shop</span>
                    <span className="text-white/50 text-[8px] md:text-[10px] tracking-[0.15em] uppercase">Collections</span>
                    <span className="text-white/50 text-[8px] md:text-[10px] tracking-[0.15em] uppercase">About</span>
                  </div>
                </div>
                {/* Hero */}
                <div className="px-4 py-6 md:py-8">
                  <p className="text-accent text-[8px] md:text-[10px] tracking-[0.3em] uppercase mb-2">New Collection</p>
                  <h3 className="text-white text-[16px] md:text-[22px] font-light tracking-tight leading-tight mb-2">Elevate Your<br />Everyday Style</h3>
                  <p className="text-white/40 text-[7px] md:text-[9px] mb-3 max-w-[200px]">Premium accessories crafted for the modern individual.</p>
                  <div className="inline-block bg-accent px-3 py-1.5">
                    <span className="text-accent-foreground text-[8px] md:text-[10px] tracking-[0.15em] uppercase">Shop Now</span>
                  </div>
                </div>
                {/* Products */}
                <div className="px-4 grid grid-cols-3 gap-2">
                  <div>
                    <div className="w-full aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-white/20 text-[18px]">✦</span>
                    </div>
                    <p className="text-white/70 text-[7px] md:text-[9px] mt-1.5 tracking-wide">Gold Ring</p>
                    <p className="text-accent text-[7px] md:text-[9px]">£29.99</p>
                  </div>
                  <div>
                    <div className="w-full aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-white/20 text-[18px]">✦</span>
                    </div>
                    <p className="text-white/70 text-[7px] md:text-[9px] mt-1.5 tracking-wide">Silver Chain</p>
                    <p className="text-accent text-[7px] md:text-[9px]">£39.99</p>
                  </div>
                  <div>
                    <div className="w-full aspect-square bg-white/5 border border-white/10 flex items-center justify-center">
                      <span className="text-white/20 text-[18px]">✦</span>
                    </div>
                    <p className="text-white/70 text-[7px] md:text-[9px] mt-1.5 tracking-wide">Pearl Set</p>
                    <p className="text-accent text-[7px] md:text-[9px]">£49.99</p>
                  </div>
                </div>
              </div>
              <p className="absolute bottom-2 left-3 text-[9px] md:text-[11px] text-accent tracking-[0.2em] uppercase font-bold">After</p>
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
