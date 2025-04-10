
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Gift } from 'lucide-react';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
    }
  }, []);
  
  const scrollToNextSection = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section 
      id="hero" 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" 
      style={{
        backgroundImage: 'url("/lovable-uploads/materiais_page-0016.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Lighter overlay for better visibility */}
      <div className="absolute inset-0 z-0 bg-black opacity-30"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-slide-up [animation-delay:300ms]">
            
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up [animation-delay:500ms]">
            Presentes & Cosméticos
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up [animation-delay:700ms]">
            Onde cada <span className="text-victoria-pink font-semibold">encomenda</span> é uma <span className="text-victoria-pink font-semibold">experiência única</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:900ms] mb-16">
            <Button 
              size="lg" 
              className="rounded-md shadow-lg bg-victoria-pink hover:bg-victoria-dark transition-all duration-300 border border-white/20 text-white hover:translate-y-[-2px]"
            >
              Conheça nossos produtos
            </Button>
            <Button 
              size="lg" 
              className="rounded-md shadow-lg bg-white/20 hover:bg-victoria-pink/90 backdrop-blur-sm text-white border border-white/30 transition-all duration-300 hover:translate-y-[-2px] hover:border-victoria-pink/50 flex gap-2"
            >
              <Gift size={20} className="text-victoria-pink" />
              <span>Fazer encomenda</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce" onClick={scrollToNextSection}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
