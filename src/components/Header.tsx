import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImg} alt="Passoia Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("looks")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Novidades
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4">
            <button
              onClick={() => scrollToSection("looks")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
            >
              Novidades
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
