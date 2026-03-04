const Footer = () => (
  <footer className="py-10 px-6 md:px-12 border-t border-border">
    <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-heading text-sm text-muted-foreground">
        © 2026 Gabe Angus Web Design
      </span>
      <div className="flex items-center gap-6">
        {["Twitter", "Instagram", "Dribbble", "LinkedIn"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-body tracking-wide uppercase"
          >
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
