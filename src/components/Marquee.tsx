const items = [
  "Web Design",
  "Development",
  "Branding",
  "UI/UX",
  "E-Commerce",
  "SEO",
  "Strategy",
  "Performance",
];

const Marquee = () => (
  <div className="overflow-hidden border-y border-border py-5 bg-secondary/30">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="mx-8 text-sm font-heading uppercase tracking-[0.3em] text-muted-foreground">
          {item} <span className="text-primary ml-8">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
