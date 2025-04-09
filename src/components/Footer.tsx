
import { Button } from '@/components/ui/button';
import { ChevronUp, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-victoria-pink text-white py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="/lovable-uploads/285af60b-f2b0-44dd-86bc-d98c672f359d.png"
                alt="Victorias Presentes & Cosméticos"
                className="h-24 w-auto bg-white/90 p-3 rounded-lg"
              />
            </div>
            <p className="text-white/80 max-w-xs text-center md:text-left">
              Onde cada encomenda é uma experiência única. Presentes especiais para momentos inesquecíveis.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#products">Produtos</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#products">Presentes Masculinos/Femininos</FooterNavItem>
              <FooterNavItem href="#products">Perfumes</FooterNavItem>
              <FooterNavItem href="#products">Cosméticos</FooterNavItem>
              <FooterNavItem href="#products">Cestas</FooterNavItem>
              <FooterNavItem href="#products">Mimos</FooterNavItem>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={16} />
                <span>62 995161346 | 62 991563589</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} />
                <span>victoriamell60@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin size={16} />
                <span>Rua Espírito Santo Qd 06 Lt 07 C1, Goiá, Goiânia - GO</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Instagram size={16} />
                <a href="https://instagram.com/victoriaspresentes" className="hover:text-white/100 transition-colors">
                  @victoriaspresentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="order-2 md:order-1 mt-4 md:mt-0 text-center md:text-left">
            <p className="text-white/70 text-sm">
              © {currentYear} Victoria's Presentes & Cosméticos. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-xs mt-1">
              Contabilidade: <a href="https://instagram.com/blessedcontabilidade" className="hover:text-white/80 transition-colors">@blessedcontabilidade</a> | Tel: 62 995283671
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 hover:bg-white/30 border-white/20 text-white"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterNavItemProps {
  href: string;
  children: React.ReactNode;
}

const FooterNavItem = ({ href, children }: FooterNavItemProps) => (
  <li>
    <a
      href={href}
      className="text-white/70 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;
