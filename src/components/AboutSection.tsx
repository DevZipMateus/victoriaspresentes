
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import AnimatedScrollObserver from '@/components/AnimatedScrollObserver';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-victoria-light/50">
      <AnimatedScrollObserver>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-victoria-pink/10 text-victoria-pink rounded-full text-sm font-medium mb-4 animate-on-scroll">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll text-victoria-pink">
              Victoria's Presentes & Cosméticos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              Especialistas em transformar momentos comuns em experiências memoráveis 
              através de presentes cuidadosamente selecionados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-bold mb-4 text-victoria-dark">
                  Uma experiência única para cada cliente
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa missão é proporcionar experiências memoráveis através de presentes personalizados.
                  Cada cliente é único, e acreditamos que os presentes também devem ser. Por isso,
                  focamos em entender as necessidades individuais e oferecer produtos que transmitam
                  sentimentos especiais.
                </p>
                <ul className="space-y-3">
                  {[
                    'Produtos selecionados com qualidade garantida',
                    'Atendimento personalizado e exclusivo',
                    'Opções para todos os gostos e ocasiões',
                    'Entregas cuidadosas para preservar a surpresa'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-victoria-pink flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 md:order-2 animate-on-scroll">
              <div className="rounded-lg shadow-lg overflow-hidden relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-pattern opacity-20"></div>
                <div className="p-8 flex items-center justify-center h-full z-10 relative">
                  <img 
                    src="/lovable-uploads/285af60b-f2b0-44dd-86bc-d98c672f359d.png" 
                    alt="Victorias Presentes & Cosméticos"
                    className="w-3/4 h-auto" 
                  />
                </div>
              </div>
              <blockquote className="mt-6 italic text-center text-victoria-dark/80 animate-on-scroll">
                "Onde cada encomenda é uma experiência única"
              </blockquote>
            </div>
          </div>
        </div>
      </AnimatedScrollObserver>
    </section>
  );
};

export default AboutSection;
