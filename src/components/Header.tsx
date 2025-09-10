import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm shadow-soft z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-primary">
              Mesón Serrablo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('menus')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Menús
            </button>
            <button 
              onClick={() => scrollToSection('carta')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Carta Principal
            </button>
            <button 
              onClick={() => scrollToSection('vinos')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Vinos
            </button>
            <button 
              onClick={() => scrollToSection('reserva')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Reserva
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-card shadow-medium">
            <nav className="px-4 py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('menus')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Menús
              </button>
              <button 
                onClick={() => scrollToSection('carta')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Carta Principal
              </button>
              <button 
                onClick={() => scrollToSection('vinos')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Vinos
              </button>
              <button 
                onClick={() => scrollToSection('reserva')}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
              >
                Reserva
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;