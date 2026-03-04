const Footer = () => (
  <footer className="py-10 px-6 md:px-16 border-t border-border/30">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-body text-[12px] text-muted-foreground/50 tracking-[0.15em] uppercase">
        © 2026 Gabe Angus Web Design
      </span>
      <div className="flex items-center gap-8">
        {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-[11px] text-muted-foreground/40 hover:text-foreground transition-colors duration-500 font-body tracking-[0.2em] uppercase"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
