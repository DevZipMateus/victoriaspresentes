import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-foreground">Harmônica</span> Contabilidade
            </h3>
            <p className="text-primary-foreground/90 max-w-xs">
              Soluções contábeis personalizadas para o crescimento e sucesso do seu negócio.
            </p>
            <div className="flex space-x-4 mt-6">
              <FooterSocialLink href="#" aria-label="Facebook" />
              <FooterSocialLink href="#" aria-label="Instagram" />
              <FooterSocialLink href="#" aria-label="LinkedIn" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#hero">Início</FooterNavItem>
              <FooterNavItem href="#about">Sobre Nós</FooterNavItem>
              <FooterNavItem href="#services">Serviços</FooterNavItem>
              <FooterNavItem href="#plans">Planos</FooterNavItem>
              <FooterNavItem href="#contact">Contato</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <FooterNavItem href="#services">Contabilidade Empresarial</FooterNavItem>
              <FooterNavItem href="#services">Consultoria Tributária</FooterNavItem>
              <FooterNavItem href="#services">Gestão Fiscal</FooterNavItem>
              <FooterNavItem href="#services">Departamento Pessoal</FooterNavItem>
              <FooterNavItem href="#services">Planejamento Tributário</FooterNavItem>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/90">
              <li>(11) 3456-7890</li>
              <li>contato@harmonicacontabil.com.br</li>
              <li>Av. Paulista, 1000, São Paulo - SP</li>
              <li>Segunda a Sexta, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Harmônica Contabilidade. Todos os direitos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
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
      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
    >
      {children}
    </a>
  </li>
);

interface FooterSocialLinkProps {
  href: string;
  'aria-label': string;
}

const FooterSocialLink = (props: FooterSocialLinkProps) => (
  <a
    {...props}
    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors duration-200"
  />
);

export default Footer;
