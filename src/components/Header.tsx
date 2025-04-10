
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-victoria-light/95 backdrop-blur-md shadow-nav' 
          : 'py-4 bg-victoria-pink/80'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="relative z-20" aria-label="Victorias Presentes & Cosméticos">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/285af60b-f2b0-44dd-86bc-d98c672f359d.png" 
                alt="Victorias Presentes & Cosméticos"
                className="h-14 w-auto"
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLinks isScrolled={isScrolled} />
            <Button variant="default" className="victoria-btn ml-4 bg-victoria-pink hover:bg-victoria-dark text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
              <Phone size={18} />
              Entre em contato
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={`h-10 w-10 ${isScrolled ? 'text-foreground' : 'text-white'}`}>
                  <Menu size={24} />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="pt-16 pb-8 px-6 bg-victoria-light">
                <nav className="flex flex-col items-center space-y-4 text-lg">
                  <NavLinks mobile />
                  <SheetClose asChild>
                    <Button className="victoria-btn mt-4 w-full bg-victoria-pink hover:bg-victoria-dark text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 py-3 text-base">
                      <Phone size={18} />
                      Entre em contato
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
  isScrolled?: boolean;
}

const NavLinks = ({ mobile, onClick, isScrolled }: NavLinksProps) => {
  const links = [
    { name: 'Início', href: '#hero' },
    { name: 'Produtos', href: '#products' },
    { name: 'Sobre Nós', href: '#about' },
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
              ? 'text-xl text-foreground hover:text-victoria-pink mb-2 w-full text-center py-3' 
              : isScrolled
                ? 'text-foreground/80 hover:text-victoria-pink hover:bg-victoria-light' 
                : 'text-white hover:text-white/80 hover:bg-victoria-pink/80'
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
