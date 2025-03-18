
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 font-medium mb-6 animate-slide-up [animation-delay:300ms]">
            Soluções Contábeis Inteligentes
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Transformamos sua Contabilidade em um Diferencial Competitivo
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            Serviços contábeis personalizados para empresas que buscam crescimento organizado 
            e otimização financeira.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up [animation-delay:900ms]">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-md shadow-button transition-all duration-300">
              Saiba Mais
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-md shadow-button transition-all duration-300">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
