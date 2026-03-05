const items = [
  "Trades Websites",
  "E-Commerce Stores",
  "Business Websites",
  "Portfolios",
  "SEO",
  "£20/mo Hosting",
  "Fast Delivery",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-border/50 py-6">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-10 text-[12px] font-body uppercase tracking-[0.4em] text-muted-foreground/60">
          {item} <span className="ml-10 text-accent/40">—</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
