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
          <img src={logoImg} alt="Logotipo Passoia - Cosméticos e Maquiagem" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8" role="navigation" aria-label="Navegação principal">
          <button
            onClick={() => scrollToSection("looks")}
            className="text-foreground hover:text-primary transition-colors font-medium"
            aria-label="Navegar para seção de Looks e Dicas de Maquiagem"
          >
            Look
          </button>
          <button
            onClick={() => scrollToSection("lancamentos")}
            className="text-foreground hover:text-primary transition-colors font-medium"
            aria-label="Navegar para seção de Lançamentos"
          >
            Lançamentos
          </button>
          <button
            onClick={() => scrollToSection("novidades")}
            className="text-foreground hover:text-primary transition-colors font-medium"
            aria-label="Navegar para seção de Novidades"
          >
            Novidades
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-4" role="navigation" aria-label="Menu de navegação móvel">
            <button
              onClick={() => scrollToSection("looks")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              aria-label="Navegar para seção de Looks e Dicas de Maquiagem"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              aria-label="Navegar para seção de Lançamentos"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
              aria-label="Navegar para seção de Novidades"
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
