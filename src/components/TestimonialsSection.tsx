
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Silva Tech Solutions",
    image: "/placeholder.svg",
    text: "A Harmônica Contabilidade transformou completamente nossa gestão financeira. Além da excelência técnica, o atendimento personalizado nos deu confiança para tomar decisões estratégicas."
  },
  {
    name: "Ana Oliveira",
    company: "Boutique Elegance",
    image: "/placeholder.svg",
    text: "Desde que começamos a trabalhar com a Harmônica, nossa carga tributária reduziu significativamente. A equipe é extremamente proativa e sempre nos orienta sobre as melhores práticas fiscais."
  },
  {
    name: "Roberto Mendes",
    company: "Construmendes Ltda",
    image: "/placeholder.svg",
    text: "Os serviços contábeis da Harmônica são de altíssima qualidade. Trouxeram organização e tranquilidade para nossa empresa, além de identificarem oportunidades de economia que não enxergávamos."
  },
  {
    name: "Lúcia Ferreira",
    company: "Café & Bistrô Aroma",
    image: "/placeholder.svg",
    text: "Como empreendedora, precisava de um parceiro contábil que entendesse os desafios de um pequeno negócio. A Harmônica superou todas as expectativas com seu atendimento humanizado."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const getVisibleTestimonials = () => {
    // For mobile, only show one testimonial
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return [testimonials[currentIndex]];
    }
    
    // For larger screens, show multiple testimonials
    const items = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
            Atendimento personalizado e resultados concretos são nossa marca registrada.
            Veja o que nossos clientes têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="animate-on-scroll">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 testimonial-slider transform`}>
              {getVisibleTestimonials().map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-button border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return;
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 600);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-button border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    name: string;
    company: string;
    image: string;
    text: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <Card className="border border-border/50 shadow-card service-card h-full">
    <CardContent className="p-8 h-full flex flex-col">
      <div className="mb-6 text-primary">
        <Quote size={32} />
      </div>
      
      <p className="text-foreground mb-6 flex-grow">{testimonial.text}</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default TestimonialsSection;
