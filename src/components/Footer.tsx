const Footer = () => (
  <footer className="py-10 px-4 sm:px-6 md:px-16 border-t border-border/30">
    <div className="container mx-auto max-w-6xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <span className="font-body text-[11px] sm:text-[12px] text-muted-foreground/50 tracking-[0.15em] uppercase text-center">
        © 2026 Gabe Angus Web Design
      </span>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-[10px] sm:text-[11px] text-muted-foreground/40 hover:text-foreground transition-colors duration-500 font-body tracking-[0.15em] sm:tracking-[0.2em] uppercase"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
