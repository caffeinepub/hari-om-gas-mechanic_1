import { Button } from "@/components/ui/button";
import { Flame, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Spare Parts", href: "#spare-parts" },
  { label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="flex items-center gap-2"
            data-ocid="nav.link"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-blue">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-brand-blue text-sm leading-none">
                HARI OM
              </div>
              <div className="font-display font-semibold text-brand-orange text-xs leading-none">
                GAS MECHANIC
              </div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-brand-blue transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+919004178235"
            className="hidden md:flex"
            data-ocid="nav.primary_button"
          >
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full font-semibold px-5 gap-2">
              <Phone className="w-4 h-4" />
              CALL NOW: +91 9004178235
            </Button>
          </a>
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:text-brand-blue"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium px-2 py-2 text-foreground hover:text-brand-blue"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919004178235"
                className="mt-2"
                data-ocid="nav.primary_button"
              >
                <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full font-semibold gap-2">
                  <Phone className="w-4 h-4" /> CALL NOW: +91 9004178235
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
