
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
import { phoneNumbers, openWhatsApp } from '@/components/WhatsAppButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

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

  const toggleContactMenu = () => {
    setIsContactMenuOpen(!isContactMenuOpen);
  };

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
            <div className="relative">
              <Button 
                variant="default" 
                className="victoria-btn ml-4 bg-victoria-pink hover:bg-victoria-dark text-white rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={toggleContactMenu}
              >
                <Phone size={18} />
                Entre em contato
              </Button>
              
              {isContactMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg p-4 min-w-[240px] z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-victoria-dark">Entre em contato</h3>
                    <button 
                      onClick={() => setIsContactMenuOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Fechar"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    Olá! Estamos aqui para ajudar com seus pedidos e dúvidas.
                  </p>
                  <div className="space-y-2">
                    {phoneNumbers.map((phone, index) => (
                      <button
                        key={index}
                        onClick={() => openWhatsApp(phone.number)}
                        className="w-full py-2 px-4 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-md flex items-center justify-center mb-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                          <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z" />
                          <path d="M8.5 14a5.5 5.5 0 0 0 7 0" />
                        </svg>
                        {phone.display}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
                    <div className="w-full space-y-4">
                      <p className="text-center font-semibold">Entre em contato</p>
                      {phoneNumbers.map((phone, index) => (
                        <Button
                          key={index}
                          onClick={() => openWhatsApp(phone.number)}
                          className="w-full py-3 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-md flex items-center justify-center gap-2"
                        >
                          <Phone size={18} />
                          {phone.display}
                        </Button>
                      ))}
                    </div>
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
