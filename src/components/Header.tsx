
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-nav' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20">
            <h1 className="text-2xl font-display font-bold text-primary">
              <span className="text-accent">Harmônica</span> Contabilidade
            </h1>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks />
            <Button className="quote-btn ml-4 bg-primary hover:bg-primary/90 text-white rounded-md transition-all duration-300 shadow-button hover:shadow-lg flex items-center gap-2">
              <FileText size={18} />
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-20 p-2 text-foreground"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-10 transition-all duration-500 md:hidden ${
              isMobileMenuOpen 
                ? 'opacity-100 pointer-events-auto' 
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <nav className="flex flex-col items-center space-y-6 text-lg">
              <NavLinks mobile onClick={toggleMobileMenu} />
              <Button className="quote-btn mt-4 bg-primary hover:bg-primary/90 text-white rounded-md transition-all duration-300 shadow-button hover:shadow-lg flex items-center gap-2">
                <FileText size={18} />
                Fale Conosco
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Planos', href: '#plans' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`font-medium transition-all duration-300 px-3 py-2 rounded-md
            ${mobile 
              ? 'text-xl text-foreground hover:text-primary' 
              : 'text-foreground/90 hover:text-primary hover:bg-accent/50'
            }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;
