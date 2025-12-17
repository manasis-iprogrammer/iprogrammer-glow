const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl font-bold">i</span>
            <span className="text-foreground font-semibold">Programmer</span>
            <span className="text-xs text-muted-foreground ml-2">
              Your Programming Partner
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} iProgrammer Solutions. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.iprogrammer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Website
            </a>
            <a
              href="mailto:sales@iprogrammer.co"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
