import { Button } from "@/components/ui/button";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Challenges", href: "#challenges" },
    { label: "Solutions", href: "#solutions" },
    { label: "Why iProgrammer", href: "#why" },
    { label: "Track Record", href: "#track-record" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-primary text-2xl font-bold">i</span>
              <span className="text-foreground text-xl font-semibold">Programmer</span>
            </div>
            <span className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-2 ml-1">
              Your Programming Partner
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>Sales Enquiries</span>
            </a>
            <Button variant="hero" size="default" asChild>
              <a href="mailto:sales@iprogrammer.co">
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:sales@iprogrammer.co">
                    <Mail className="w-4 h-4" />
                    Contact Us
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
